import { IsArray, ArrayNotEmpty, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { TransactionItemDto } from './transaction-item.dto';

export class CreateTransactionDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => TransactionItemDto)
  items: TransactionItemDto[];

  @IsString()
  @IsNotEmpty()
  paymentMode: string;
}
