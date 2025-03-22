// src/auth/auth.controller.ts
import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { GoogleSigninDto } from './dto/google-signin.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('google-signin')
  async googleSignin(@Body() googleSigninDto: GoogleSigninDto) {
    return this.authService.googleSignin(googleSigninDto);
  }

  @Post('refresh')
  @UseGuards(JwtAuthGuard)
  async refresh(@Req() req) {
    return this.authService.refreshToken(req.user);
  }

  @Post('google-mobile')
  async googleMobileLogin(@Body('idToken') idToken: string) {
    return this.authService.googleMobileSignin(idToken);
  }
}
