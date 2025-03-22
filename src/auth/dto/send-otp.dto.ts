// src/auth/dto/send-otp.dto.ts
import { IsNotEmpty, Matches } from 'class-validator';

export class SendOtpDto {
  @IsNotEmpty()
  @Matches(/^[0-9]{10,15}$/, {
    message: 'Mobile number must be between 10 and 15 digits',
  })
  mobile: string;
}
