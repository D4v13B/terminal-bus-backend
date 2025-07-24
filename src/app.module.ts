import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthsModule } from './auths/auths.module';

import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './config/auth';

@Module({
  imports: [AuthsModule,  AuthModule.forRoot(auth)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
