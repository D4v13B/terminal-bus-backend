import { Injectable } from '@nestjs/common';
import { CreateTerminaleDto } from './dto/create-terminale.dto';
import { UpdateTerminaleDto } from './dto/update-terminale.dto';

@Injectable()
export class TerminalesService {
  create(createTerminaleDto: CreateTerminaleDto) {
    return 'This action adds a new terminale';
  }

  findAll() {
    return `This action returns all terminales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} terminale`;
  }

  update(id: number, updateTerminaleDto: UpdateTerminaleDto) {
    return `This action updates a #${id} terminale`;
  }

  remove(id: number) {
    return `This action removes a #${id} terminale`;
  }
}
