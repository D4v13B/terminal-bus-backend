import { Ruta } from 'src/rutas/entities/ruta.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('paradas')
export class Parada {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ruta, (ruta) => ruta.paradas)
  @JoinColumn({ name: 'ruta_id' })
  ruta: Ruta;

  @Column()
  nombre: string;

  @Column({ type: 'int' }) // Orden en la ruta
  orden: number;

  @Column({ type: 'int' }) // Tiempo desde salida (en minutos)
  tiempo_estimado_llegada: number;
}
