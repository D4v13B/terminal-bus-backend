import { Module } from '@nestjs/common';
import { BoletosService } from './boletos.service';
import { BoletosController } from './boletos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boleto } from './entities/boleto.entity';
import { ParadaRuta } from 'src/parada-ruta/entities/parada-ruta.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Boleto, User, ParadaRuta])],
  controllers: [BoletosController],
  providers: [BoletosService],
})
export class BoletosModule {}
