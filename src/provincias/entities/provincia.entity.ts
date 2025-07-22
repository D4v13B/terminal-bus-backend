import { Ruta } from 'src/rutas/entities/ruta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('provincias')
export class Provincia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Ruta, (ruta) => ruta.origen)
  rutasOrigen: Ruta[];

  @OneToMany(() => Ruta, (ruta) => ruta.destino)
  rutasDestino: Ruta[];
}
