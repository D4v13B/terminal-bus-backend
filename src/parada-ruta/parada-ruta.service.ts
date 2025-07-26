import { Injectable } from '@nestjs/common';
import { CreateParadaRutaDto } from './dto/create-parada-ruta.dto';
import { UpdateParadaRutaDto } from './dto/update-parada-ruta.dto';

@Injectable()
export class ParadaRutaService {
  create(createParadaRutaDto: CreateParadaRutaDto) {
    return 'This action adds a new paradaRuta';
  }

  findAll() {
    return `This action returns all paradaRuta`;
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
