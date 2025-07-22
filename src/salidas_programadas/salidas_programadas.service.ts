import { Injectable } from '@nestjs/common';
import { CreateSalidasProgramadaDto } from './dto/create-salidas_programada.dto';
import { UpdateSalidasProgramadaDto } from './dto/update-salidas_programada.dto';

@Injectable()
export class SalidasProgramadasService {
  create(createSalidasProgramadaDto: CreateSalidasProgramadaDto) {
    return 'This action adds a new salidasProgramada';
  }

  findAll() {
    return `This action returns all salidasProgramadas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salidasProgramada`;
  }

  update(id: number, updateSalidasProgramadaDto: UpdateSalidasProgramadaDto) {
    return `This action updates a #${id} salidasProgramada`;
  }

  remove(id: number) {
    return `This action removes a #${id} salidasProgramada`;
  }
}
