import { Controller, Post, Get, Body } from '@nestjs/common';
import { PosService } from './pos.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('pos')
export class PosController {
  constructor(private readonly posService: PosService) {}

  // POST /pos/transaction
  @Post('transaction')
  async createTransaction(@Body() dto: CreateTransactionDto) {
    return this.posService.createTransaction(dto);
  }

  // GET /pos/transactions
  @Get('transactions')
  async getTransactions() {
    return this.posService.getTransactions();
  }
}
