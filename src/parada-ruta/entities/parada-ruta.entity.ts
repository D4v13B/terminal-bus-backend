import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
} from 'typeorm';
import { Ruta } from '../../rutas/entities/ruta.entity';
import { Parada } from '../../paradas/entities/parada.entity';
import { Boleto } from '../../boletos/entities/boleto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class ParadaRuta {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column('decimal', { precision: 11, scale: 2 })
  @ApiProperty({ example: 10.99 })
  precio: number; // This will store values like 10.99, 125.00, etc.

  @ManyToOne(() => Ruta, (ruta) => ruta.paradasRuta)
  @ApiProperty({ type: () => Ruta })
  ruta: Ruta;

  @ManyToOne(() => Parada, (parada) => parada.paradasRuta)
  parada: Parada;

  @OneToMany(() => Boleto, (boleto) => boleto.paradaRuta)
  boletos: Boleto[];
}
