// terminal.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Provincia } from 'src/provincias/entities/provincia.entity';

@Entity()
export class Terminal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column('decimal')
  long: number;

  @Column('decimal')
  lat: number;

  @ManyToOne(() => Provincia, provincia => provincia.terminales)
  provincia: Provincia;
}
