import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Seen } from './seen.entity';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Injectable()
export class SeenService {
  private readonly logger = new Logger(SeenService.name);

  constructor(
    @InjectRepository(Seen)
    private seenRepository: Repository<Seen>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async markAsSeen(userId: string, movieId: string): Promise<Seen> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    const movie = await this.movieRepository.findOne({
      where: { id: movieId },
    });

    if (!user || !movie) {
      throw new InternalServerErrorException('User or Movie not found');
    }

    try {
      const entry = this.seenRepository.create({ user, movie });
      return await this.seenRepository.save(entry);
    } catch (e) {
      this.logger.error('Failed to mark as seen', e.stack);
      throw new InternalServerErrorException('Failed to mark as seen');
    }
  }

  async markAsUnseen(userId: string, movieId: string): Promise<void> {
    try {
      await this.seenRepository.delete({
        user: { id: userId },
        movie: { id: movieId },
      });
    } catch (e) {
      this.logger.error('Failed to mark as unseen', e.stack);
      throw new InternalServerErrorException('Failed to mark as unseen');
    }
  }

  async getSeenMovies(userId: string): Promise<Seen[]> {
    return this.seenRepository.find({
      where: { user: { id: userId } },
      relations: ['movie'],
    });
  }
}
