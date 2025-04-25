import {
  Controller,
  Post,
  Get,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserInputDto } from './dto/create-user-input.dto';
import { User } from './user.entity';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserInputDto): Promise<User> {
    return this.userService.createUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userService.getAllUser();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
