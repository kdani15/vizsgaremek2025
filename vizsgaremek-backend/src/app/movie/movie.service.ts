import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { CreateMovieInputDto } from './dto/create-movie-input.dto';

@Injectable()
export class MovieService {
  private readonly logger = new Logger(MovieService.name);

  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async create(movie: CreateMovieInputDto): Promise<Movie> {
    try {
      const createMoviePayload = this.movieRepository.create({ ...movie });
      return await this.movieRepository.save(createMoviePayload);
    } catch (e) {
      this.logger.error('Failed to create movie', e.stack);
      throw new InternalServerErrorException('Failed to create movie'); // TODO: error codes ???
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
        where: { title: Like(`%${searchInput}%`) },
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
}
