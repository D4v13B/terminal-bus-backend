import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany, Decimal128 } from 'typeorm';
import { Ruta } from '../../rutas/entities/ruta.entity';
import { Parada } from '../../paradas/entities/parada.entity';
import { Boleto } from '../../boletos/entities/boleto.entity';

@Entity()
export class ParadaRuta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  precio: Decimal128;

  @ManyToOne(() => Ruta, ruta => ruta.paradasRuta)
  ruta: Ruta;

  @ManyToOne(() => Parada, parada => parada.paradasRuta)
  parada: Parada;

  @OneToMany(() => Boleto, boleto => boleto.paradaRuta)
  boletos: Boleto[];
}