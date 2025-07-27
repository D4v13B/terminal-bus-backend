import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Provincia } from '../../provincias/entities/provincia.entity';

@Entity('terminales')
export class Terminal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  long: number;

  @Column()
  lat: number;

  @ManyToOne(() => Provincia, provincia => provincia.terminales)
  provincia: Provincia;
}
