import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

export enum TipoBus {
  EXPRESS = 'EXPRESS',
  ESTANDAR = 'ESTANDAR',
}

export enum EstadoTecnico {
  BUENO = 'BUENO',
  REGULAR = 'REGULAR',
  MANTENIMIENTO = 'MANTENIMIENTO',
}

@Entity('buses')
@Unique(['placa']) // Asegura que la placa sea única
export class Bus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  placa: string;

  @Column({
    type: 'enum',
    enum: TipoBus,
  })
  tipo: TipoBus;

  @Column({ type: 'int' })
  capacidad: number;

  @Column({
    type: 'enum',
    enum: EstadoTecnico,
    default: EstadoTecnico.BUENO,
  })
  estado_tecnico: EstadoTecnico;

  @Column({ default: true })
  activo: boolean;
}
