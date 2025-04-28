import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { Watchlist } from '../watchlist/watchlist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie, Watchlist])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
