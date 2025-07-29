import { User } from 'src/users/entities/user.entity';
import { Boleto } from '../../boletos/entities/boleto.entity';
// import { SalidaProgramada } from 'src/salidas_programadas/entities/salidas_programada.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

export enum TipoNotificacion {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  WHATSAPP = 'WHATSAPP',
  PUSH = 'PUSH',
}

@Entity('notificaciones')
export class Notificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TipoNotificacion,
  })
  tipo: TipoNotificacion;

  @Column()
  destino: string; // correo o teléfono

  @Column({ nullable: true })
  asunto: string;

  @Column('text')
  mensaje: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  usuario?: User;

  @CreateDateColumn({ name: 'enviado_en' })
  enviadoEn: Date;

  // Referencia polimórfica: solo uno puede tener valor, los otros null

  @ManyToOne(() => Boleto, { nullable: true })
  @JoinColumn({ name: 'boleto_id' })
  boleto?: Boleto;

  // @ManyToOne(() => Encomienda, { nullable: true })
  // @JoinColumn({ name: 'encomienda_id' })
  // encomienda?: Encomienda;

  // @ManyToOne(() => SalidaProgramada, { nullable: true })
  // @JoinColumn({ name: 'salida_programada_id' })
  // salidaProgramada?: SalidaProgramada;
}
