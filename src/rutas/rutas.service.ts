import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ruta } from '../rutas/entities/ruta.entity'
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Injectable()
export class RutasService {
  constructor(
    @InjectRepository(Ruta)
    private rutaRepository: Repository<Ruta>,
  ) {}

  async create(createRutaDto: CreateRutaDto) {
    return await this.rutaRepository.save(createRutaDto);
  }

  async findAll(): Promise<Ruta[]> {
  return this.rutaRepository.find({
    relations: ['prov'],
  });
}

  async findOne(id: number) {
    return await this.rutaRepository.findOne({where: { id }});
  }

  async update(id: number, updateRutaDto: UpdateRutaDto) {
    const toUpdate = await this.rutaRepository.findOne({ where: { id }});

    if (!toUpdate) {
      throw new Error(`Ruta with id ${id} not found`);
    }

    const updated = Object.assign(toUpdate, updateRutaDto);

    return await this.rutaRepository.save(updated);
  }

  async remove(id: number) {
    return await this.rutaRepository.delete(id);
  }
}
