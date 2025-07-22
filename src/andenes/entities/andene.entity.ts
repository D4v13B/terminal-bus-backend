import { SalidaProgramada } from 'src/salidas_programadas/entities/salidas_programada.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity('andenes')
export class Anden {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  terminal: string; // Ej: "Terminal Albrook", "David", etc.

  @Column()
  numero: string; // Puede ser número o código, ej: "A1", "2", "B-3"

  @Column({ default: true })
  activo: boolean;

  // Relaciones
  @OneToMany(() => SalidaProgramada, (salida) => salida.anden)
  salidasProgramadas: SalidaProgramada[];
}
