import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Boleto } from '../../boletos/entities/boleto.entity';
import { Session } from 'src/sessions/entities/session.entity';
import { Account } from 'src/accounts/entities/account.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  id: string;

  @Column('text')
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  @ApiProperty({ example: 'chili@gmail.com' })
  email: string;

  @Column()
  @ApiProperty({ example: 'true' })
  emailVerified: boolean;

  @Column('text', { nullable: true })
  @ApiProperty({ example: 'https://example.com/image.jpg' })
  image: string;

  @CreateDateColumn()
  @ApiProperty({ example: '2023-10-01T12:00:00Z' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ example: '2023-10-01T12:00:00Z' })
  updatedAt: Date;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(() => Boleto, (boleto) => boleto.user)
  boletos: Boleto[];
}
