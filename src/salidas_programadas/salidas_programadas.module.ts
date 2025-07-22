import { Module } from '@nestjs/common';
import { SalidasProgramadasService } from './salidas_programadas.service';
import { SalidasProgramadasController } from './salidas_programadas.controller';

@Module({
  controllers: [SalidasProgramadasController],
  providers: [SalidasProgramadasService],
})
export class SalidasProgramadasModule {}
