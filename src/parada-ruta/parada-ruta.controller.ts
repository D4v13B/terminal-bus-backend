import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParadaRutaService } from './parada-ruta.service';
import { CreateParadaRutaDto } from './dto/create-parada-ruta.dto';
import { UpdateParadaRutaDto } from './dto/update-parada-ruta.dto';

@Controller('parada-ruta')
export class ParadaRutaController {
  constructor(private readonly paradaRutaService: ParadaRutaService) {}

  @Post()
  create(@Body() createParadaRutaDto: CreateParadaRutaDto) {
    return this.paradaRutaService.create(createParadaRutaDto);
  }

  @Get()
  findAll() {
    return this.paradaRutaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paradaRutaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParadaRutaDto: UpdateParadaRutaDto) {
    return this.paradaRutaService.update(+id, updateParadaRutaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paradaRutaService.remove(+id);
  }
}
