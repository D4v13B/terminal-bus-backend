import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoletosService } from './boletos.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { Boleto } from './entities/boleto.entity';

@Controller('boletos')
export class BoletosController {
  constructor(private readonly boletosService: BoletosService) {}


  @Post()
  @ApiCreatedResponse({ type: Boleto, description: 'Boleto creado exitosamente' })
  @ApiBody({ type: CreateBoletoDto })
  async create(@Body() createBoletoDto: CreateBoletoDto): Promise<Boleto> {
    return this.boletosService.create(createBoletoDto);
  }

  @Get()
  findAll() {
    return this.boletosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boletosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoletoDto: UpdateBoletoDto) {
    return this.boletosService.update(+id, updateBoletoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boletosService.remove(+id);
  }
}
