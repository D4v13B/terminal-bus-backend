import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('verification')
export class Verification {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('text')
  identifier: string;

  @Column('text')
  value: string;

  @Column('datetime')
  expiresAt: Date;

  @CreateDateColumn({ type: 'datetime', nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: true })
  updatedAt?: Date;
}
