// parada.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ParadaRuta } from '../../parada-ruta/entities/parada-ruta.entity';

@Entity()
export class Parada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('decimal')
  lat: number;

  @Column('decimal')
  long: number;

  @OneToMany(() => ParadaRuta, paradaRuta => paradaRuta.parada)
  paradasRuta: ParadaRuta[];
}
