import { Anden } from 'src/andenes/entities/anden.entity';
import { Bus } from 'src/buses/entities/bus.entity';
import { Ruta } from 'src/rutas/entities/ruta.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

export enum EstadoSalida {
  PROGRAMADA = 'PROGRAMADA',
  EN_CURSO = 'EN_CURSO',
  CANCELADA = 'CANCELADA',
}

@Entity('salidas_programadas')
export class SalidaProgramada {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Ruta)
  @JoinColumn({ name: 'ruta_id' })
  ruta: Ruta;

  @ManyToOne(() => Bus)
  @JoinColumn({ name: 'bus_id' })
  bus: Bus;

  @ManyToOne(() => Anden)
  @JoinColumn({ name: 'anden_id' })
  anden: Anden;

  @Column({ type: 'date' })
  fecha: string; // YYYY-MM-DD

  @Column({ type: 'time' })
  hora_salida: string; // HH:mm:ss

  @Column({
    type: 'enum',
    enum: EstadoSalida,
    default: EstadoSalida.PROGRAMADA,
  })
  estado: EstadoSalida;
}
