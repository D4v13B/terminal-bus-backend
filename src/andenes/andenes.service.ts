import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Anden  } from './entities/anden.entity';
import { CreateAndeneDto } from './dto/create-andene.dto';
import { UpdateAndeneDto } from './dto/update-andene.dto';

@Injectable()
export class AndenesService {
  
  constructor(
      @InjectRepository(Anden)
      private andenRepository: Repository<Anden>,
    ) {}

  async create(createAndeneDto: CreateAndeneDto) {
    return await this.andenRepository.save(createAndeneDto);
  }

  async findAll() {
    return await this.andenRepository.find();
  }

  async findOne(id: number) {
    return await this.andenRepository.findOne({where: { id }});
  }

  async update(id: number, updateAndeneDto: UpdateAndeneDto) {
    const toUpdate = await this.andenRepository.findOne({ where: { id }});

    if(!toUpdate){
      throw new Error(`Ruta with id ${id} not found`)
    }

    const updated = Object.assign(toUpdate, updateAndeneDto);

    return await this.andenRepository.save(updated);
  }

  async remove(id: number) {
    return await this.andenRepository.delete(id);
  }
}
