import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  HttpCode,
  InternalServerErrorException,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiParam,
} from '@nestjs/swagger';
import { GetRutaDto } from './dto/get-ruta.dto';
import { RutasService } from './rutas.service';
import { CreateRutaDto } from './dto/create-ruta.dto';
import { UpdateRutaDto } from './dto/update-ruta.dto';

@Controller('rutas')
export class RutasController {
  constructor(private readonly rutasService: RutasService) {}

  @Post()
  @HttpCode(201)
  @ApiBody({ type: CreateRutaDto })
  @ApiCreatedResponse({ description: 'Ruta creada exitosamente.' })
  create(@Body() createRutaDto: CreateRutaDto) {
    try {
      return this.rutasService.create(createRutaDto);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      throw new InternalServerErrorException('Error inesperado');
    }
  }

  @Get()
  @HttpCode(200)
  @ApiOkResponse({ type: [GetRutaDto] })
  async getRutas(): Promise<GetRutaDto[]> {
    const rutas = await this.rutasService.findAll();

    return rutas.map(ruta => ({
      id: ruta.id,
      nombreTo: ruta.to?.nombre,
      nombreTd: ruta.td?.nombre,
      distancia: ruta.distancia,
      anden: ruta.anden,
      horaEntrada: ruta.horaEntrada,
      horaSalida: ruta.horaSalida,
    }));
  }

  @Get(':id')
  @HttpCode(200)
  @ApiOkResponse({ type: GetRutaDto })
  findOne(@Param('id') id: string) {
    return this.rutasService.findOne(+id);
    
  }

  @Put(':id')
  @HttpCode(200)
  @ApiParam({ name: 'id', type: Number })
  update(@Param('id') id: string, @Body() updateRutaDto: UpdateRutaDto) {
    return this.rutasService.update(+id, updateRutaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rutasService.remove(+id);
  }
}
