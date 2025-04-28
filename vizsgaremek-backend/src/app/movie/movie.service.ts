import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, In, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { CreateMovieInputDto } from './dto/create-movie-input.dto';
import { Watchlist } from '../watchlist/watchlist.entity';

@Injectable()
export class MovieService {
  private readonly logger = new Logger(MovieService.name);

  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
    @InjectRepository(Watchlist)
    private watchlistRepository: Repository<Watchlist>,
  ) {}

  async create(createMovieDto: CreateMovieInputDto): Promise<Movie> {
    try {
      const movie = this.movieRepository.create(createMovieDto);
      return await this.movieRepository.save(movie);
    } catch (error) {
      this.logger.error('Failed to create movie', error.stack);
      throw new InternalServerErrorException();
    }
  }

  async findAll(limit = 21, offset = 0): Promise<Movie[]> {
    try {
      return await this.movieRepository.find({
        skip: offset,
        take: limit,
        order: { createdAt: 'DESC' },
      });
    } catch (e) {
      this.logger.error('Failed to retrieve movies', e.stack);
      throw new InternalServerErrorException('Failed to retrieve movies');
    }
  }

  async findById(id: string): Promise<Movie> {
    try {
      const movie = await this.movieRepository.findOne({ where: { id } });
      if (!movie) throw new NotFoundException(`Movie with ID ${id} not found`);
      return movie;
    } catch (e) {
      this.logger.error(
        `Error occurred while retrieving movie with ID ${id}`,
        e.stack,
      );
      throw new InternalServerErrorException(
        'Could not retrieve movie details with this ID',
      );
    }
  }

  async findByTitle(
    searchInput: string,
    limit = 10,
    offset = 0,
  ): Promise<Movie[]> {
    try {
      return this.movieRepository.find({
        where: { title: ILike(`%${searchInput}%`) },
        skip: offset,
        take: limit,
        order: { createdAt: 'DESC' },
      });
    } catch (e) {
      this.logger.error(
        `Error occurred while retrieving movie with title ${searchInput}`,
        e.stack,
      );
      throw new InternalServerErrorException(
        'Could not retrieve movie details with this title',
      );
    }
  }

  async update(id: string, movieUpdateInput: Partial<Movie>): Promise<Movie> {
    try {
      await this.movieRepository.update(id, movieUpdateInput);
      const updatedMovie = await this.movieRepository.findOne({
        where: { id },
      });

      if (!updatedMovie) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }

      return updatedMovie;
    } catch (e) {
      this.logger.error('Failed to update movie', e.stack);
      throw new InternalServerErrorException('Failed to update movie');
    }
  }

  async findLatestFromCurrentAndLastYear(limit = 21): Promise<Movie[]> {
    const currentYear = new Date().getFullYear();
    const yearsToInclude = [currentYear, currentYear - 1];

    try {
      return await this.movieRepository.find({
        where: {
          releaseYear: In(yearsToInclude),
        },
        order: { releaseYear: 'DESC', createdAt: 'DESC' },
        take: limit,
      });
    } catch (e) {
      this.logger.error('Failed to retrieve recent movies', e.stack);
      throw new InternalServerErrorException(
        'Could not retrieve recent movies',
      );
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const result = await this.movieRepository.delete(id);
      if (result.affected === 0) {
        throw new NotFoundException(`Movie with ID ${id} not found`);
      }
    } catch (e) {
      this.logger.error('Failed to remove movie', e.stack);
      throw new InternalServerErrorException('Failed to remove movie');
    }
  }

  async removeAllMoviesAndWatchLists(): Promise<void> {
    try {
      await this.watchlistRepository.delete({});
      await this.movieRepository.delete({});
    } catch (e) {
      this.logger.error('Failed to remove movie', e.stack);
      throw new InternalServerErrorException('Failed to remove movies');
    }
  }
}
