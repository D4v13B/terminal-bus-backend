import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  HttpCode,
  Put,
} from '@nestjs/common';
import { BoletosService } from './boletos.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Boleto } from './entities/boleto.entity';
import { UUID } from 'crypto';
import { Response } from 'express';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';


@Controller('boletos')
export class BoletosController {
  constructor(private readonly boletosService: BoletosService) {}

  @Post()
  @ApiCreatedResponse({
    type: Boleto,
    description: 'Boleto creado exitosamente',
  })
  @ApiBody({ type: CreateBoletoDto })
  async create(@Body() createBoletoDto: CreateBoletoDto): Promise<Boleto> {
    return this.boletosService.create(createBoletoDto);
  }

  @Get()
  findAll() {
    return this.boletosService.findAll();
  }


  @Get('user/:userId')
  @HttpCode(200)
  @ApiOkResponse({ type: [Boleto] })
  async getByuser(@Query('userId') userId: string) {
    return this.boletosService.findByUserId(userId);
  }


  @Get('token/:token')
  @HttpCode(200)
  @ApiOkResponse({ type: [Boleto] })
  async getByToken(@Param('token') token: UUID) {
    return await this.boletosService.findByToken(token);
  }

@Get('view/:tokenBoleto')
async renderBoleto(@Param('tokenBoleto') tokenBoleto: UUID, @Res() res: Response) {
  const boleto = await this.boletosService.findByToken(tokenBoleto);

  if (!boleto) {
    return res.status(404).send('Boleto not found');
  }

  const fechaUsoFormateada = format(new Date(boleto.fechaUso), 'dd/MM/yyyy HH:mm', { locale: es });

  return res.render('boleto', { boleto: {...boleto, fechaUsoFormateada} });
}



  @Put(':id')
  @HttpCode(200)
  update(@Param('id') id: string, @Body() updateBoletoDto: UpdateBoletoDto) {
    return this.boletosService.update(+id, updateBoletoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boletosService.remove(+id);
  }
}
