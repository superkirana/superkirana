import { Controller, Get, Put, Body, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

// For simplicity, skipping JWT guard implementation.
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user/profile
  @Get('profile')
  async getProfile(@Req() req) {
    // In production, get user id from request (decoded token)
    const userId = req.user?.id || '550e8400-e29b-41d4-a716-446655440001';
    return this.userService.getProfile(userId);
  }

  // PUT /user/profile
  @Put('profile')
  async updateProfile(@Body() dto: UpdateProfileDto, @Req() req) {
    const userId = req.user?.id || '550e8400-e29b-41d4-a716-446655440001';
    return this.userService.updateProfile(userId, dto);
  }
}
