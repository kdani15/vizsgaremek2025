import { Module } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistController } from './watchlist.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Watchlist } from './watchlist.entity';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Watchlist, User, Movie])],
  providers: [WatchlistService],
  controllers: [WatchlistController],
})
export class WatchlistModule {}
