// provincia.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Terminal } from '../../terminales/entities/terminal.entity';

@Entity()
export class Provincia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Terminal, terminal => terminal.provincia)
  terminales: Terminal[];
}
