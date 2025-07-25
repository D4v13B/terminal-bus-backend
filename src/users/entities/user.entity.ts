// usuario.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Boleto } from 'src/boletos/entities/boleto.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Boleto, boleto => boleto.user)
  boletos: Boleto[];
}
