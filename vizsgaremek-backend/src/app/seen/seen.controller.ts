import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
  Delete,
  Req,
} from '@nestjs/common';
import { SeenService } from './seen.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

interface AuthenticatedRequest extends Request {
  user: { id: string; email?: string };
}

@Controller('seen')
export class SeenController {
  constructor(private readonly seenService: SeenService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getSeen(@Req() req: AuthenticatedRequest) {
    const userId = req.user.id;
    return this.seenService.getSeenMovies(userId);
  }

  @Post('add')
  @UseGuards(JwtAuthGuard)
  async markAsSeen(
    @Body('movieId') movieId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    const userId = req.user.id;
    return this.seenService.markAsSeen(userId, movieId);
  }

  @Delete('remove')
  @UseGuards(JwtAuthGuard)
  async markAsUnseen(
    @Body('movieId') movieId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    const userId = req.user.id;
    return this.seenService.markAsUnseen(userId, movieId);
  }

  @Get(':movieId')
  @UseGuards(JwtAuthGuard)
  async getHasMovieBeenSeen(
    @Param('movieId') movieId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    const userId = req.user.id;
    return this.seenService.getHasMovieBeenSeen(movieId, userId);
  }
}
