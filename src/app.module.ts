import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
