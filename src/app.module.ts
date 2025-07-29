import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RutasModule } from './rutas/rutas.module';
import { ProvinciasModule } from './provincias/provincias.module';
import { ParadasModule } from './paradas/paradas.module';
import { BoletosModule } from './boletos/boletos.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSourceOptions } from './database/data-source';
// import { AppDataSource } from './database/database.provider';
import { ParadaRutaModule } from './parada-ruta/parada-ruta.module';
import { TerminalesModule } from './terminales/terminales.module';
import { SessionsModule } from './sessions/sessions.module';
import { AccountsModule } from './accounts/accounts.module';
import { VerificationsModule } from './verifications/verifications.module';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from './utils/auth';
import { AuthModule as Auths } from './auth/auth.module';

@Module({
  imports: [
    AuthModule.forRoot(auth),
    Auths,
    TypeOrmModule.forRoot(AppDataSourceOptions),
    UsersModule,
    RutasModule,
    ProvinciasModule,
    ParadasModule,
    BoletosModule,
    NotificacionesModule,
    ParadaRutaModule,
    TerminalesModule,
    SessionsModule,
    AccountsModule,
    VerificationsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
