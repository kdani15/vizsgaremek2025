import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieInputDto } from './dto/create-movie-input.dto';
import { Movie } from './movie.entity';
import { UpdateMovieInputDto } from './dto/update-movie-input.dto';

@Controller('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(
    @Body() createMovieInputDto: CreateMovieInputDto,
  ): Promise<Movie> {
    return this.movieService.create(createMovieInputDto);
  }

  @Get('search')
  async findByTitle(
    @Query('title') title: string,
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
  ): Promise<Movie[]> {
    return this.movieService.findByTitle(title, limit, offset);
  }

  @Get()
  async findAll(
    @Query('limit') limit: number = 21,
    @Query('offset') offset: number = 0,
  ): Promise<Movie[]> {
    return this.movieService.findAll(limit, offset);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Movie> {
    return this.movieService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() movieUpdateInput: Partial<UpdateMovieInputDto>,
  ): Promise<Movie> {
    return this.movieService.update(id, movieUpdateInput);
  }

  @Get('latest')
  async getLatestMovies(): Promise<Movie[]> {
    return this.movieService.findLatestFromCurrentAndLastYear();
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.movieService.remove(id);
  }
}
