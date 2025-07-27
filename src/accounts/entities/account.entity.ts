import { User } from 'src/users/entities/user.entity';
import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryColumn({ type: 'varchar', length: 36 })
  id: string;

  @Column('text')
  accountId: string;

  @Column('text')
  providerId: string;

  @ManyToOne(() => User, (user) => user.accounts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'varchar', length: 36 })
  userId: string;

  @Column('text', { nullable: true })
  accessToken: string;

  @Column('text', { nullable: true })
  refreshToken: string;

  @Column('text', { nullable: true })
  idToken: string;

  @Column({ type: 'datetime', nullable: true })
  accessTokenExpiresAt: Date;

  @Column({ type: 'datetime', nullable: true })
  refreshTokenExpiresAt: Date;

  @Column('text', { nullable: true })
  scope: string;

  @Column('text', { nullable: true })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
