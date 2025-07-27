import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ParadaRutaService } from './parada-ruta.service';
import { CreateParadaRutaDto } from './dto/create-parada-ruta.dto';
import { UpdateParadaRutaDto } from './dto/update-parada-ruta.dto';
import { GetParadaRuta } from './dto/get-parada-ruta';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('parada-ruta')
export class ParadaRutaController {
  constructor(private readonly paradaRutaService: ParadaRutaService) {}

  @Post()
  create(@Body() createParadaRutaDto: CreateParadaRutaDto) {
    return this.paradaRutaService.create(createParadaRutaDto);
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({ type: [GetParadaRuta]})
  async getParadaRutas(): Promise<GetParadaRuta[]> {
    const paradaruta = await this.paradaRutaService.findAll();

    return paradaruta.map(paradaRuta => ({
      id: paradaRuta.id,
      nombre: paradaRuta.ruta.prov.nombre,
      precio: paradaRuta.precio,
      long: paradaRuta.parada.long,
      lat: paradaRuta.parada.lat,
    }))
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
