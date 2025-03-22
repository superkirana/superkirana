import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class PosService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async createTransaction(dto: CreateTransactionDto) {
    const transaction = this.transactionRepository.create({
      items: dto.items,
      paymentMode: dto.paymentMode,
      total: dto.items.reduce((acc, curr) => acc + (curr.quantity * 100), 0), // dummy total calculation
    });
    await this.transactionRepository.save(transaction);
    return { transactionId: transaction.id, status: 'Success', total: transaction.total };
  }

  async getTransactions() {
    return this.transactionRepository.find();
  }
}
