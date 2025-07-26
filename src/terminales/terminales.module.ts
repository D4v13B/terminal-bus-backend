import { Module } from '@nestjs/common';
import { Terminal } from './entities/terminal.entity'
import { TerminalesService } from './terminales.service';
import { TerminalesController } from './terminales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Terminal])],
  controllers: [TerminalesController],
  providers: [TerminalesService],
})
export class TerminalesModule {}
