import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class CheckoutDto {
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;

  @IsObject()
  paymentDetails: any;
}
