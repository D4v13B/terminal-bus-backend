// ruta.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Provincia } from 'src/provincias/entities/provincia.entity';
import { Terminal } from 'src/terminales/entities/terminal.entity';
import { ParadaRuta } from 'src/parada-ruta/entities/parada-ruta.entity';

@Entity()
export class Ruta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  distancia: number;

  @Column()
  anden: string;

  @ManyToOne(() => Provincia)
  prov: Provincia;

  @ManyToOne(() => Terminal)
  to: Terminal;

  @ManyToOne(() => Terminal)
  td: Terminal;

  @OneToMany(() => ParadaRuta, paradaRuta => paradaRuta.ruta)
  paradasRuta: ParadaRuta[];
}
