import { IsOptional, IsString, IsNumber, IsInt, Min } from 'class-validator';

export class CartItemDto {
  @IsOptional()
  @IsString()
  productId?: string;

  @IsOptional()
  @IsString()
  productName?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsInt()
  @Min(1)
  quantity: number;
}
