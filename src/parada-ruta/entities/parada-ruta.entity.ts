import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, OneToMany } from 'typeorm';
import { Ruta } from 'src/rutas/entities/ruta.entity';
import { Parada } from 'src/paradas/entities/parada.entity';
import { Boleto } from 'src/boletos/entities/boleto.entity';

@Entity()
export class ParadaRuta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal')
  precio: number;

  @ManyToOne(() => Ruta, ruta => ruta.paradasRuta)
  ruta: Ruta;

  @ManyToOne(() => Parada, parada => parada.paradasRuta)
  parada: Parada;

  @OneToMany(() => Boleto, boleto => boleto.paradaRuta)
  boletos: Boleto[];
}