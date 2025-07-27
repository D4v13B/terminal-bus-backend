// boleto.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ParadaRuta } from '../../parada-ruta/entities/parada-ruta.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Boleto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fechaUso: Date;

  @Column()
  valido: boolean;

  @Column({ type: 'uuid' })
  tokenBoleto: string;

  @ManyToOne(() => ParadaRuta, paradaRuta => paradaRuta.boletos)
  paradaRuta: ParadaRuta;

  @ManyToOne(() => User, user => user.boletos)
  user: User;
}
