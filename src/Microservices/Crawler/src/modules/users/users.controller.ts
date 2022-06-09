import {
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  Request,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { TransformInterceptor } from '../../core/interceptors/transform-interceptor.util';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { TimeoutInterceptor } from '../../core/interceptors/timeout.interceptor';
import { SkipThrottle } from '@nestjs/throttler';
import { API_VERSION } from '../../core/constants';
import { User } from './schemas/user.schema';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@SkipThrottle()
@ApiTags('users')
@Controller(API_VERSION + 'users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @UseInterceptors(TransformInterceptor, TimeoutInterceptor)
  async getAllUser() {
    return await this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  @UseInterceptors(TransformInterceptor, TimeoutInterceptor)
  async get(@Request() req): Promise<User> {
    return await this.usersService.getUserLoggedIn(req.user._id);
  }

  @Get(':id')
  @UseInterceptors(TransformInterceptor, TimeoutInterceptor)
  async findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
