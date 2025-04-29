import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { Watchlist } from '../watchlist/watchlist.entity';
import { Seen } from '../seen/seen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Watchlist, Seen])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
