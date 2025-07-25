// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { UsersService } from '../users/users.service';
// import { User } from 'src/users/entities/user.entity';

// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UsersService,
//     private jwtService: JwtService,
//   ) {}

//   async validateUser(username: string, pass: string): Promise<User | null> {
//     const user = await this.usersService.findOne(username);

//     if (!user) return null;

//     if (user && (await bcrypt.compare(pass, user.password))) {
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const { password, ...result } = user;
//       return result as User;
//     }
//     return null;
//   }

//   login(user: { username: string; userId: number }) {
//     const payload = { username: user.username, sub: user.userId };
//     return {
//       access_token: this.jwtService.sign(payload),
//     };
//   }
// }
