// src/auth/auth.service.ts
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { GoogleSigninDto } from './dto/google-signin.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from './entities/user.entity';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}
  private googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  // Register a new user (local)
  async register(registerDto: RegisterDto): Promise<any> {
    const { email, mobile, password, name } = registerDto;

    // Check if user exists (by email or mobile)
    const existingUser = await this.usersRepository.findOne({
      where: [{ email }, { mobile }],
    });
    if (existingUser) {
      throw new ConflictException(
        'User with provided email or mobile already exists',
      );
    }

    // Hash the password securely using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = this.usersRepository.create({
      name,
      email,
      mobile,
      password: hashedPassword,
      provider: 'local',
      roles: ['user'],
    });
    await this.usersRepository.save(user);
    return { message: 'Registration successful' };
  }

  // Validate user credentials for local login
  async validateUser(identifier: string, password: string): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: [{ email: identifier }, { mobile: identifier }],
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }

  // Login a user and generate a JWT
  async login(loginDto: LoginDto): Promise<any> {
    const { identifier, password } = loginDto;
    const user = await this.validateUser(identifier, password);
    const payload = { sub: user.id, email: user.email, roles: user.roles };
    const accessToken = this.jwtService.sign(payload);
    // In production, also generate and return a refresh token.
    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    };
  }

  // Google OAuth sign-in
  async googleSignin(googleSigninDto: GoogleSigninDto): Promise<any> {
    
    const { token, name, email, mobile } = googleSigninDto;
    // Validate the Google token (this example omits actual Google API verification)
    let user = await this.usersRepository.findOne({ where: { email } });
    if (!user) {
      // If the user does not exist, create a new record
      
      // Generate a random password for OAuth users (they won't use it to log in)
      const randomPassword = await bcrypt.hash(Math.random().toString(36).slice(-10), 10);
      
      user = this.usersRepository.create({
        name,
        email,
        mobile,
        password: randomPassword, // Generate a random password instead of null
        provider: 'google',
        googleToken: token,
        roles: ['user'],
      });
      await this.usersRepository.save(user);
    }
    const payload = { sub: user.id, email: user.email, roles: user.roles };
    const accessToken = this.jwtService.sign(payload);
    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
      },
    };
  }

  // Refresh token endpoint – reissue an access token
  async refreshToken(user: User): Promise<any> {
    const payload = { sub: user.id, email: user.email, roles: user.roles };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }




async googleMobileSignin(idToken: string): Promise<any> {
  const ticket = await this.googleClient.verifyIdToken({
    idToken,
    audience: process.env.GOOGLE_CLIENT_ID,
  });
  const payload = ticket.getPayload();
  if (!payload) {
    throw new UnauthorizedException('Invalid token payload');
  }
  const { email, name } = payload;

  let user = await this.usersRepository.findOne({ where: { email } });

  if (!user) {
    const randomPassword = await bcrypt.hash(Math.random().toString(36).slice(-10), 10);
    user = this.usersRepository.create({
      email,
      name,
      password: randomPassword,
      provider: 'google',
      googleToken: idToken,
      roles: ['user'],
    });
    await this.usersRepository.save(user);
  }

  const tokenPayload = { sub: user.id, email: user.email, roles: user.roles };
  const accessToken = this.jwtService.sign(tokenPayload);

  return {
    accessToken,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
    },
  };
}

}
