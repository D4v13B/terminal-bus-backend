import { Parada } from 'src/paradas/entities/parada.entity';
import { Provincia } from 'src/provincias/entities/provincia.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('rutas')
export class Ruta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Provincia, (provincia) => provincia.rutasOrigen)
  @JoinColumn({ name: 'origen_id' })
  origen: Provincia;

  @ManyToOne(() => Provincia, (provincia) => provincia.rutasDestino)
  @JoinColumn({ name: 'destino_id' })
  destino: Provincia;

  @Column({ type: 'float' })
  distancia_km: number;

  @Column({ type: 'int' }) // duración en minutos
  duracion_estimada: number;

  @Column({ default: true })
  activa: boolean;

  @OneToMany(() => Parada, (parada) => parada.ruta, { cascade: true })
  paradas: Parada[];
}
