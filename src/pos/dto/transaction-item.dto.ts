import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

export class TransactionItemDto {
  @IsString()
  @IsNotEmpty()
  itemId: string;

  @IsInt()
  @Min(1)
  quantity: number;
}
