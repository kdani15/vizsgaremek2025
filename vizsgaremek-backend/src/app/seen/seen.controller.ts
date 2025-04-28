import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { SeenService } from './seen.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';

@Controller('seen')
export class SeenController {
  constructor(private readonly seenService: SeenService) {}

  @Post('add')
  @UseGuards(LocalAuthGuard)
  async markAsSeen(
    @Body('movieId') movieId: string,
    @Body('userId') userId: string,
  ) {
    return this.seenService.markAsSeen(userId, movieId);
  }

  @Delete('remove')
  @UseGuards(LocalAuthGuard)
  async markAsUnseen(
    @Body('movieId') movieId: string,
    @Body('userId') userId: string,
  ) {
    return this.seenService.markAsUnseen(userId, movieId);
  }

  @Get(':userId')
  @UseGuards(LocalAuthGuard)
  async getSeen(@Param('userId') userId: string) {
    return this.seenService.getSeenMovies(userId);
  }
}
