import { Module } from '@nestjs/common';
import { ParadasService } from './paradas.service';
import { ParadasController } from './paradas.controller';
import { Parada } from './entities/parada.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Parada])],
  controllers: [ParadasController],
  providers: [ParadasService],
})
export class ParadasModule {}
