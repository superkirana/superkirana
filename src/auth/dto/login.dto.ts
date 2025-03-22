// src/auth/dto/login.dto.ts
import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  identifier: string; // Email or mobile

  @IsNotEmpty()
  password: string;
}
