import { PartialType } from '@nestjs/mapped-types';
import { CreateSalidasProgramadaDto } from './create-salidas_programada.dto';

export class UpdateSalidasProgramadaDto extends PartialType(CreateSalidasProgramadaDto) {}
