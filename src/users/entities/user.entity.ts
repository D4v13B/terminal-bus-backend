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

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column()
  emailVerified: boolean;

  @Column('text', { nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @OneToMany(() => Boleto, (boleto) => boleto.user)
  boletos: Boleto[];
}
