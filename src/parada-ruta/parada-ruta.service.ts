import { Injectable } from '@nestjs/common';
import { CreateParadaRutaDto } from './dto/create-parada-ruta.dto';
import { UpdateParadaRutaDto } from './dto/update-parada-ruta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ParadaRuta } from './entities/parada-ruta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParadaRutaService {
  constructor(
    @InjectRepository(ParadaRuta)
    private paradaRutaRepository: Repository<ParadaRuta>
  ){}

  async create(createParadaRutaDto: CreateParadaRutaDto) {
    return await 'This action adds a new paradaRuta';
  }

  async findAll(): Promise<ParadaRuta[]> {
    return await this.paradaRutaRepository.find({
      relations: ['ruta', 'ruta.prov', 'parada', 'boletos'],
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} paradaRuta`;
  }

  update(id: number, updateParadaRutaDto: UpdateParadaRutaDto) {
    return `This action updates a #${id} paradaRuta`;
  }

  remove(id: number) {
    return `This action removes a #${id} paradaRuta`;
  }
}
