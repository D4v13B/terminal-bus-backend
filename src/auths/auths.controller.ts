import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  HttpCode,
  HttpException,
  HttpStatus , 
  Response
} from '@nestjs/common';
import {
  AuthGuard,
  Session,
  UserSession,
  Public,
} from '@thallesp/nestjs-better-auth';

import { AuthsService } from './auths.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

import { auth } from 'src/config/auth';

@Controller('api')
@UseGuards(AuthGuard)
export class AuthsController {
  constructor(private readonly authsService: AuthsService) { }

  // Obtener perfil del usuario autenticado
  @Get('me')
  async getProfile(@Session() session: UserSession) {
    return { user: session.user };
  }

  // Ruta pública de login con email (puedes ajustar la lógica según tu sistema)
  @Public()
  @Post('login')
  async login(@Body() body: { email: string, password: string } , @Response() res) {
    const { email, password } = body;
    const response = await auth.api.signInEmail({
      body: {
        email,
        password
      },
      asResponse: true // returns a response object instead of data
    });
    console.log(response)

    if (!response) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return { response };
  }

  @Public()
  @Post('register')
  async register(@Body() body: { name: string, email: string, password: string }) {
    const { name, email, password } = body;
    const response = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password
      },
      asResponse: true // returns a response object instead of data
    });
  }


}
