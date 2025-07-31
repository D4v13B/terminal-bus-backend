// ruta.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Provincia } from '../../provincias/entities/provincia.entity';
import { Terminal } from '../../terminales/entities/terminal.entity';
import { ParadaRuta } from '../../parada-ruta/entities/parada-ruta.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Ruta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  distancia: number;

  @Column()
  anden: string;

  @Column()
  horaEntrada: string;

  @Column()
  horaSalida: string;

  @ManyToOne(() => Provincia)
  prov: Provincia;

  @ManyToOne(() => Terminal)
  to: Terminal;

  @ManyToOne(() => Terminal)
  td: Terminal;

  @OneToMany(() => ParadaRuta, paradaRuta => paradaRuta.ruta)
  paradasRuta: ParadaRuta[];
}
