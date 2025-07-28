import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { Boleto } from './entities/boleto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { ParadaRuta } from 'src/parada-ruta/entities/parada-ruta.entity';

@Injectable()
export class BoletosService {

  constructor(
      @InjectRepository(Boleto)
      private boletoRepository: Repository<Boleto>,

       @InjectRepository(User)
      private userRepository: Repository<User>,

      @InjectRepository(ParadaRuta)
      private paradaRutaRepository: Repository<ParadaRuta>,
    ) {}

  async create(createBoletoDto: CreateBoletoDto): Promise<Boleto> {
    const{ fechaUso, paradaRutaId, userId } = createBoletoDto;

    const user = await this.userRepository.findOneBy({ id: userId });
  if (!user) {
    throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
  }

  const paradaRuta = await this.paradaRutaRepository.findOneBy({ id: paradaRutaId });
  if (!paradaRuta) {
    throw new NotFoundException(`ParadaRuta con ID ${paradaRutaId} no encontrada`);
  }

    const nuevoBoleto = this.boletoRepository.create({

      fechaUso,
      tokenBoleto: uuidv4(),
      user: {id: userId},
      paradaRuta: {id: paradaRutaId},

    })

    return await this.boletoRepository.save(nuevoBoleto);
      
  }

  findAll() {
    return `This action returns all boletos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} boleto`;
  }

  update(id: number, updateBoletoDto: UpdateBoletoDto) {
    return `This action updates a #${id} boleto`;
  }

  remove(id: number) {
    return `This action removes a #${id} boleto`;
  }
}
