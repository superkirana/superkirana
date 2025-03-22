import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './entities/transaction.entity';
import { PosController } from './pos.controller';
import { PosService } from './pos.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  controllers: [PosController],
  providers: [PosService],
})
export class PosModule {}
