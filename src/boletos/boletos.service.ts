import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { Boleto } from './entities/boleto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { ParadaRuta } from 'src/parada-ruta/entities/parada-ruta.entity';
import { UUID } from 'crypto';

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
    const { fechaUso, paradaRutaId, userId } = createBoletoDto;

    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`Usuario con ID ${userId} no encontrado`);
    }

    const paradaRuta = await this.paradaRutaRepository.findOneBy({
      id: paradaRutaId,
    });
    if (!paradaRuta) {
      throw new NotFoundException(
        `ParadaRuta con ID ${paradaRutaId} no encontrada`,
      );
    }

    const nuevoBoleto = this.boletoRepository.create({
      fechaUso,
      tokenBoleto: uuidv4(),
      user: { id: userId },
      paradaRuta: { id: paradaRutaId },
    });

    return await this.boletoRepository.save(nuevoBoleto);
  }

  findAll() {
    return `This action returns all boletos`;
  }

  findOne(id: string) {
    return `This action returns a #${id} boleto`;
  }

  async findByUserId(userId: string): Promise<Boleto[]> {
    return await this.boletoRepository.find({
      where: {
        user: { id: userId },
      },
      relations: [
        'user',
        'paradaRuta',
        'paradaRuta.ruta',
        'paradaRuta.ruta.to',
        'paradaRuta.ruta.td',
        'paradaRuta.parada',
      ],
    });
  }

  //where: { tokenBoleto: tokenBoleto.toString() }
  async findByToken(tokenBoleto: UUID) {
    return await this.boletoRepository.findOne({ where: {tokenBoleto},
    relations: ['user', 'paradaRuta', 'paradaRuta.ruta.td',],
    });
  }

  async update(id: number, updateBoletoDto: UpdateBoletoDto) {
    const toUpdate = await this.boletoRepository.findOne({ where: { id } });

    if (!toUpdate) {
      throw new NotFoundException(`Boleto with id ${id} not found`);
    }

    const updated = Object.assign(toUpdate, updateBoletoDto);

    return await this.boletoRepository.save(updated);
  }

  remove(id: number) {
    return `This action removes a #${id} boleto`;
  }
}
