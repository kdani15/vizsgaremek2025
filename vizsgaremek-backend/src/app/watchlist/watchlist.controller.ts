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

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @Post('add')
  @UseGuards(LocalAuthGuard)
  async addToWatchlist(
    @Body('movieId') movieId: string,
    @Body('userId') userId: string,
  ) {
    return this.watchlistService.addToWatchlist(userId, movieId);
  }

  @Delete('remove')
  @UseGuards(LocalAuthGuard)
  async removeFromWatchlist(
    @Body('movieId') movieId: string,
    @Body('userId') userId: string,
  ) {
    return this.watchlistService.removeFromWatchlist(userId, movieId);
  }

  @Get(':userId')
  @UseGuards(LocalAuthGuard)
  async getWatchlist(@Param('userId') userId: string) {
    return this.watchlistService.getWatchlistByUser(userId);
  }
}
