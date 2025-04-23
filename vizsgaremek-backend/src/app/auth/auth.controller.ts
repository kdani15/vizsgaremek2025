import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { UserService } from '../user/user.service';
import { CreateUserInputDto } from '../user/dto/create-user-input.dto';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserInputDto) {
    return await this.userService.createUser(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
