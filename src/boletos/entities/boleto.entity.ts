// boleto.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ParadaRuta } from '../../parada-ruta/entities/parada-ruta.entity';
import { User } from '../../users/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Boleto {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1 })
  id: number;

  @Column()
  @ApiProperty({ example: '2025-07-28' })
  fechaUso: Date;

  @Column()
  @ApiProperty({ example: true })
  valido: boolean;

  @Column({ type: 'uuid' })
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  tokenBoleto: string;

  @ManyToOne(() => ParadaRuta, (paradaRuta) => paradaRuta.boletos)
  @ApiProperty({ type: () => ParadaRuta })
  paradaRuta: ParadaRuta;

  @ManyToOne(() => User, (user) => user.boletos)
  @ApiProperty({ type: () => User })
  user: User;
}
