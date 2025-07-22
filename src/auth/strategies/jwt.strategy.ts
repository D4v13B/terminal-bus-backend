import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../config/jwt.config'; // este es el correcto
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../users/user.entity';

export type JwtPayload = {
  sub: string;
  email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject(jwtConfig.KEY) private jwtConfiguration: ConfigType<typeof jwtConfig>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    const extractJwtFromCookie = (req) => {
      if (req?.cookies?.access_token) {
        return req.cookies['access_token'];
      }
      return ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    };

    super({
      jwtFromRequest: extractJwtFromCookie,
      ignoreExpiration: false,
      secretOrKey: jwtConfiguration.secret, // ✅ CORREGIDO
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userRepository.findOne({ where: { id: payload.sub } });

    if (!user) {
      throw new UnauthorizedException('Please log in to continue');
    }

    return {
      id: payload.sub,
      email: payload.email,
    };
  }
}
