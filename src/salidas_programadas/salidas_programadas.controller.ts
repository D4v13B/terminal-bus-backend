import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalidasProgramadasService } from './salidas_programadas.service';
import { CreateSalidasProgramadaDto } from './dto/create-salidas_programada.dto';
import { UpdateSalidasProgramadaDto } from './dto/update-salidas_programada.dto';

@Controller('salidas-programadas')
export class SalidasProgramadasController {
  constructor(private readonly salidasProgramadasService: SalidasProgramadasService) {}

  @Post()
  create(@Body() createSalidasProgramadaDto: CreateSalidasProgramadaDto) {
    return this.salidasProgramadasService.create(createSalidasProgramadaDto);
  }

  @Get()
  findAll() {
    return this.salidasProgramadasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salidasProgramadasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalidasProgramadaDto: UpdateSalidasProgramadaDto) {
    return this.salidasProgramadasService.update(+id, updateSalidasProgramadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salidasProgramadasService.remove(+id);
  }
}
