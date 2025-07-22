import { Injectable } from '@nestjs/common';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { Repository } from 'typeorm';
import { Bus } from './entities/bus.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BusesService {
  constructor(
    @InjectRepository(Bus)
    private busRepository: Repository<Bus>,
  ) {}

  create(createBusDto: CreateBusDto) {
    return 'This action adds a new bus';
  }

  findAll() {
    return `This action returns all buses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bus`;
  }

  update(id: number, updateBusDto: UpdateBusDto) {
    return `This action updates a #${id} bus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bus`;
  }
}
