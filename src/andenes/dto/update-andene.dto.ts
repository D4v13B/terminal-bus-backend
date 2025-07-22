import { PartialType } from '@nestjs/mapped-types';
import { CreateAndeneDto } from './create-andene.dto';

export class UpdateAndeneDto extends PartialType(CreateAndeneDto) {}
