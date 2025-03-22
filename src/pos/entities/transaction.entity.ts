import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('transactions')
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('json')
  items: any;

  @Column()
  paymentMode: string;

  @Column('float')
  total: number;

  @CreateDateColumn()
  createdAt: Date;
}
