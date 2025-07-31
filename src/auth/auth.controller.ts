import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  HttpException,
  HttpStatus,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard, Public } from '@thallesp/nestjs-better-auth';
import { auth } from 'src/utils/auth';
import { JwtService } from '@nestjs/jwt';
import { Request as ResEx } from 'express';
import { date } from 'better-auth/*';

interface SignInResponse {
  redirect: boolean;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    image: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface SignUpResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    image: string;
    emailVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
}

@Controller('auth')
@UseGuards(AuthGuard)
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ) {}

  @Public()
  @Post('sign-in/email')
  async login(@Body() body: { email: string; password: string }) {
    const { email, password } = body;

    if (!email || !password) {
      throw new HttpException(
        'Email and password are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const response = await auth.api.signInEmail({
        body: {
          email,
          password,
        },
        asResponse: true,
      });

      // Puedes adaptar esta respuesta a tus necesidades
      // return {
      //   message: 'Login successful',
      //   user: response.data.user,
      //   status: response.status,
      // };

      // if (!response.ok) {
      //   const errorBody = await response.json();
      //   throw new HttpException(
      //     errorBody?.message || 'Failed to register user',
      //     response.status,
      //   );
      // }
      // console.log(await response.json());
      const data = (await response.json()) as SignInResponse;

      // const dataToken = {
      //   user: data.user,
      // };

      // return {
      //   message: 'User loged successfully',
      //   user: data.user,
      //   accesToken: data.token,
      //   token: this.jwtService.sign(dataToken),
      //   status: response.status,
      // };

      return data;
    } catch (error: any) {
      console.error('Error during login:', error);
      throw new HttpException(
        error?.message || 'Authentication failed',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  @Public()
  @Post('signup/email')
  async register(
    @Body()
    body: {
      name: string;
      email: string;
      password: string;
      image?: string;
    },
  ) {
    const { name, email, password, image } = body;

    if (!name || !email || !password) {
      throw new HttpException(
        'Name, email, and password are required',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const response = await auth.api.signUpEmail({
        body: {
          name,
          email,
          password,
        },
        asResponse: true,
      });

      // console.log(JSON.stringify(response, null, 2));

      if (!response.ok) {
        const errorBody = await response.json();
        throw new HttpException(
          errorBody?.message || 'Failed to register user',
          response.status,
        );
      }
      const data = (await response.json()) as SignUpResponse;

      // const authToken = response.headers.get('set-auth-token');

      // return {
      //   message: 'User registered successfully',
      //   user: data.user,
      //   token: authToken, // puedes omitir esto si vas a manejar cookie de sesión
      //   status: response.status,
      // };

      return data;
    } catch (err: unknown) {
      const error = err as { message?: string };
      console.error('Registration error:', error);
      throw new HttpException(
        error?.message || 'Unexpected registration error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Public()
  @Post('sign-in/social')
  async social(@Body() body: { provider: string; callbackURL: string }) {
    // El provider será 'google'
    const { provider, callbackURL } = body;

    // BetterAuth tiene método para login social pasando el token del proveedor:
    const response = await auth.api.signInSocial({
      body: {
        provider,
        callbackURL,
      },
    });

    console.log(response);

    return response;
  }

  @Get('get-session')
  @UseGuards(AuthGuard)
  async getSession(@Request() request: ResEx) {
    // const user = req.user;

    // return {
    //   session: {
    //     user: {
    //       id: user.id,
    //       name: user.name,
    //       email: user.email,
    //       // cualquier otro campo útil
    //     },
    //     token: req.token, // si lo tienes accesible, opcional
    //   },
    // };

    const headers = new Headers();
    for (const key in request.headers) {
      if (request.headers[key]) {
        headers.append(key, request.headers[key].toString());
      }
    }
    const session = auth.api.getSession({
      headers,
    });

    return session;
  }
}
