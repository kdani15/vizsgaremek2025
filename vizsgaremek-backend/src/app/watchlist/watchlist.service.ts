import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Watchlist } from './watchlist.entity';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Injectable()
export class WatchlistService {
  private readonly logger = new Logger(WatchlistService.name);

  constructor(
    @InjectRepository(Watchlist)
    private watchlistRepository: Repository<Watchlist>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async addToWatchlist(userId: string, movieId: string): Promise<Watchlist> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const movie = await this.movieRepository.findOne({
      where: { id: movieId },
    });

    if (!user || !movie) {
      throw new InternalServerErrorException('User or Movie not found');
    }

    try {
      const newWatchlistEntry = this.watchlistRepository.create({
        user,
        movie,
        createdAt: new Date(),
      });
      return await this.watchlistRepository.save(newWatchlistEntry);
    } catch (e) {
      this.logger.error('Failed to add to watchlist', e.stack);
      throw new InternalServerErrorException('Failed to add to watchlist');
    }
  }

  async removeFromWatchlist(userId: string, movieId: string): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const movie = await this.movieRepository.findOne({
      where: { id: movieId },
    });

    if (!user || !movie) {
      throw new InternalServerErrorException('User or Movie not found');
    }

    try {
      const watchlistEntry = await this.watchlistRepository.findOne({
        where: { user: { id: userId }, movie: { id: movieId } },
      });

      if (!watchlistEntry) {
        throw new InternalServerErrorException('Movie not found in watchlist');
      }

      await this.watchlistRepository.remove(watchlistEntry);
    } catch (e) {
      this.logger.error('Failed to remove from watchlist', e.stack);
      throw new InternalServerErrorException('Failed to remove from watchlist');
    }
  }

  async getWatchlistByUser(userId: string): Promise<Watchlist[]> {
    try {
      return await this.watchlistRepository.find({
        where: { user: { id: userId } },
        relations: ['movie'],
        order: { createdAt: 'DESC' },
      });
    } catch (e) {
      this.logger.error('Failed to retrieve watchlist', e.stack);
      throw new InternalServerErrorException('Failed to retrieve watchlist');
    }
  }
}
