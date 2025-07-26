import { Module } from '@nestjs/common';
import { Anden } from './entities/anden.entity'
import { AndenesService } from './andenes.service';
import { AndenesController } from './andenes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Anden])],
  controllers: [AndenesController],
  providers: [AndenesService],
})
export class AndenesModule {}
