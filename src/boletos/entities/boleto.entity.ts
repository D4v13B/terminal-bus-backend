import { SalidaProgramada } from 'src/salidas_programadas/entities/salidas_programada.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

export enum EstadoBoleto {
  RESERVADO = 'RESERVADO',
  PAGADO = 'PAGADO',
  CANCELADO = 'CANCELADO',
  REEMBOLSADO = 'REEMBOLSADO',
}

@Entity('boletos')
export class Boleto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => SalidaProgramada)
  @JoinColumn({ name: 'salida_id' })
  salida: SalidaProgramada;

  // @ManyToOne(() => Pasajero)
  // @JoinColumn({ name: 'pasajero_id' })
  // pasajero: Pasajero;

  @Column()
  asiento: string;

  @Column({ type: 'float' })
  precio: number;

  @Column({
    type: 'enum',
    enum: EstadoBoleto,
    default: EstadoBoleto.RESERVADO,
  })
  estado: EstadoBoleto;

  @Column()
  codigo_qr: string;

  @CreateDateColumn({ name: 'creado_en' })
  creadoEn: Date;
}
