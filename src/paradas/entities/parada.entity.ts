// parada.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ParadaRuta } from '../../parada-ruta/entities/parada-ruta.entity';

@Entity()
export class Parada {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  lat: string;

  @Column()
  long: string;

  @OneToMany(() => ParadaRuta, (paradaRuta) => paradaRuta.parada)
  paradasRuta: ParadaRuta[];
}
