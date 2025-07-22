import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RutasModule } from './rutas/rutas.module';
import { ProvinciasModule } from './provincias/provincias.module';
import { ParadasModule } from './paradas/paradas.module';
import { BusesModule } from './buses/buses.module';
import { AndenesModule } from './andenes/andenes.module';
import { SalidasProgramadasModule } from './salidas_programadas/salidas_programadas.module';
import { BoletosModule } from './boletos/boletos.module';
import { NotificacionesModule } from './notificaciones/notificaciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // o 'mysql'
      host: 'localhost',
      port: 5432, // o 3306 para MySQL
      username: 'tu_usuario',
      password: 'tu_contraseña',
      database: 'nombre_bd',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // importante: false en producción
      migrations: ['dist/migrations/*.js'],
      migrationsRun: true,
    }),
    UsersModule,
    AuthModule,
    RutasModule,
    ProvinciasModule,
    ParadasModule,
    BusesModule,
    AndenesModule,
    SalidasProgramadasModule,
    BoletosModule,
    NotificacionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
