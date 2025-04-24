import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
  Delete,
  Req,
} from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Request } from 'express';

interface AuthenticatedRequest extends Request {
  user: { id: string; email?: string /* other user properties */ };
}

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Post('add')
  @UseGuards(AuthGuard('jwt'))
  async addToWatchlist(
    @Body('movieId') movieId: string,
    @Body('userId') userId: string,
  ) {
    return this.watchlistService.addToWatchlist(userId, movieId);
  }

  @Delete('remove')
  @UseGuards(JwtAuthGuard)
  async removeFromWatchlist(
    @Body('movieId') movieId: string,
    @Body('userId') userId: string,
  ) {
    return this.watchlistService.removeFromWatchlist(userId, movieId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':movieId')
  async getIsMovieOnWatchlist(
    @Param('movieId') movieId: string,
    @Req() req: AuthenticatedRequest,
  ) {
    const userId = req.user.id;
    return this.watchlistService.getIsMovieOnWatchlist(movieId, userId);
  }

  @Get(':userId')
  @UseGuards(LocalAuthGuard)
  async getWatchlist(@Param('userId') userId: string) {
    return this.watchlistService.getWatchlistByUser(userId);
  }
}
