import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GetRutaDto } from './dto/get-ruta-response.dto';
import { RutasService } from './rutas.service';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Controller('rutas')
export class RutasController {
  constructor(private readonly rutasService: RutasService) {}

  @Post()
  create(@Body() createRutaDto: CreateRutaDto) {
    return this.rutasService.create(createRutaDto);
  }

  @Get()
  async getRutas(): Promise<GetRutaDto[]> {
    const rutas = await this.rutasService.findAll();

    return rutas.map(ruta => ({
      provincia: ruta.prov?.nombre,
      distancia: ruta.distancia,
      anden: ruta.anden,
      horaEntrada: ruta.horaEntrada,
      horaSalida: ruta.horaSalida,
    }));
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rutasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRutaDto: UpdateRutaDto) {
    return this.rutasService.update(+id, updateRutaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rutasService.remove(+id);
  }
}
