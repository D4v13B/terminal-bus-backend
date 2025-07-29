import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Leer token de header Authorization Bearer
      secretOrKey: process.env.JWT_SECRET || 'miSecretoSuperSecreto',
    });
  }

  validate(payload: {
    id: string;
    email: string;
    name: string;
    image: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  }) {
    // Aquí puedes hacer más validaciones si quieres, o consultar DB
    console.log(payload);

    return { userId: payload.id, email: payload.email, name: payload.name };
  }
}
