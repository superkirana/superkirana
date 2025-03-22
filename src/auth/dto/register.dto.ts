// src/auth/dto/register.dto.ts
import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  Matches,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEmail({}, { message: 'Invalid email address' })
  email?: string;

  @IsOptional()
  @Matches(/^[0-9]{10,15}$/, {
    message: 'Mobile number must be between 10 and 15 digits',
  })
  mobile?: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password: string;
}
