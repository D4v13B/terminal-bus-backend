import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import googleOauthConfig from './auth/config/google-oauth.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
 
    }),
    ConfigModule.forFeature(googleOauthConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}