import { Module } from '@nestjs/common';
import { ParadaRutaService } from './parada-ruta.service';
import { ParadaRutaController } from './parada-ruta.controller';

@Module({
  controllers: [ParadaRutaController],
  providers: [ParadaRutaService],
})
export class ParadaRutaModule {}
