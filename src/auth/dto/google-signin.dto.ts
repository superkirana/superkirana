// src/auth/dto/google-signin.dto.ts
import { IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class GoogleSigninDto {
  @IsNotEmpty()
  token: string; // Google OAuth token

  @IsNotEmpty()
  name: string;

  @IsEmail({}, { message: 'Invalid email address' })
  email: string;

  @IsOptional()
  mobile?: string;
}
