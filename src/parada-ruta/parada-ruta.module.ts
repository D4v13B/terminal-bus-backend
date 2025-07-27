import { Module } from '@nestjs/common';
import { ParadaRutaService } from './parada-ruta.service';
import { ParadaRutaController } from './parada-ruta.controller';
import { ParadaRuta } from './entities/parada-ruta.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ParadaRuta])],
  controllers: [ParadaRutaController],
  providers: [ParadaRutaService],
})
export class ParadaRutaModule {}
