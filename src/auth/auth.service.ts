import { Inject, Injectable, UnauthorizedException,BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { generateFromEmail } from 'unique-username-generator';
import { UsersService } from 'src/users/users.service';
import { AuthJwtPayload } from './types/auth-jwtPayload';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';
import * as argon2 from 'argon2';
import { CurrentUser } from './types/current-user';
import { User } from '../users/user.entity'
import { CreateUserDto, RegisterUserDto } from 'src/users/dto/users';

@Injectable()
export class AuthService {
  constructor(

    private userService: UsersService,
    private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
    @Inject(refreshJwtConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,

  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload)
  }

   async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      return this.registerUser(user);
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email,
    });
  }

   async registerUser(user: RegisterUserDto) {
    try {
      const newUser = this.userRepository.create(user);
      newUser.name = generateFromEmail(user.email, 5);

      await this.userRepository.save(newUser);

      return this.generateJwt({
        sub: newUser.id,
        email: newUser.email,
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUserByEmail(email) {
    const user = await this.userRepository.findOne({ email });

    if (!user) {
      return null;
    }

    return user;
  }

  async login(userId: number) {
    // const payload: AuthJwtPayload = { sub: userId };
    // const token = this.jwtService.sign(payload);
    // const refreshToken = this.jwtService.sign(payload, this.refreshTokenConfig);
    const { accessToken, refreshToken } = await this.generateTokens(userId);
    const hashedRefreshToken = await argon2.hash(refreshToken);
    await this.userService.updateHashedRefreshToken(userId, hashedRefreshToken);
    return {
      id: userId,
      accessToken,
      refreshToken,
    };
  }
  async generateTokens(userId: number) {
    const payload: AuthJwtPayload = { sub: userId };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload),
      this.jwtService.signAsync(payload, this.refreshTokenConfig),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }

  // async refreshToken(userId: number) {
  //   const { accessToken, refreshToken } = await this.generateTokens(userId);
  //   const hashedRefreshToken = await argon2.hash(refreshToken);
  //   await this.userService.updateHashedRefreshToken(userId, hashedRefreshToken);
  //   return {
  //     id: userId,
  //     accessToken,
  //     refreshToken,
  //   };
  // }

  // async validateRefreshToken(userId: number, refreshToken: string) {
  //   const user = await this.userService.findOne(userId);
  //   if (!user || !user.hashedRefreshToken)
  //     throw new UnauthorizedException('Invalid Refresh Token');

  //   const refreshTokenMatches = await argon2.verify(
  //     user.hashedRefreshToken,
  //     refreshToken,
  //   );
  //   if (!refreshTokenMatches)
  //     throw new UnauthorizedException('Invalid Refresh Token');

  //   return { id: userId };
  // }

  // async signOut(userId: number) {
  //   await this.userService.updateHashedRefreshToken(userId, null);
  // }

  async validateJwtUser(userId: number) {
    const user = await this.userService.findOneById(userId);
    if (!user) throw new UnauthorizedException('User not found!');
    const currentUser: CurrentUser = { id: user.id, role: user.role };
    return currentUser;
  }

  async validateGoogleUser(googleUser: CreateUserDto) {
    const user = await this.userService.findOneByEmail(googleUser.email);
    if (user) return user;
    return await this.userService.create(googleUser);
  }
}