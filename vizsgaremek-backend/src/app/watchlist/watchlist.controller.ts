import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { LocalAuthGuard } from '../auth/local-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

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

  @Get(':movieId')
  @UseGuards(JwtAuthGuard)
  async getIsMovieOnWatchlist(
    @Param('movieId') movieId: string,
    @Param('userId') userId: string,
  ) {
    return this.watchlistService.getIsMovieOnWatchlist(movieId, userId);
  }

  @Get(':userId')
  @UseGuards(LocalAuthGuard)
  async getWatchlist(@Param('userId') userId: string) {
    return this.watchlistService.getWatchlistByUser(userId);
  }
}
