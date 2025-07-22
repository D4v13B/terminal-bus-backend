import { Injectable } from '@nestjs/common';
import { CreateAndeneDto } from './dto/create-andene.dto';
import { UpdateAndeneDto } from './dto/update-andene.dto';

@Injectable()
export class AndenesService {
  create(createAndeneDto: CreateAndeneDto) {
    return 'This action adds a new andene';
  }

  findAll() {
    return `This action returns all andenes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} andene`;
  }

  update(id: number, updateAndeneDto: UpdateAndeneDto) {
    return `This action updates a #${id} andene`;
  }

  remove(id: number) {
    return `This action removes a #${id} andene`;
  }
}
