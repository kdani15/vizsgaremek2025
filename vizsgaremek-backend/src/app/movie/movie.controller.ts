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

  // Film hozzáadása
  @Post()
  async create(
    @Body() createMovieInputDto: CreateMovieInputDto,
  ): Promise<Movie> {
    return this.movieService.create(createMovieInputDto);
  }

  // Első 10 film keresése cím alapján
  @Get('search')
  async findByTitle(
    @Query('title') title: string,
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0,
  ): Promise<Movie[]> {
    return this.movieService.findByTitle(title, limit, offset);
  }

  // Legújabb 21 film lekérdezése a főoldalra
  @Get()
  async findAll(
    @Query('limit') limit: number = 21,
    @Query('offset') offset: number = 0,
  ): Promise<Movie[]> {
    return this.movieService.findAll(limit, offset);
  }

  // Film lekérdezése ID alapján
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Movie> {
    return this.movieService.findById(id);
  }

  // Film frissítése
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() movieUpdateInput: Partial<UpdateMovieInputDto>,
  ): Promise<Movie> {
    return this.movieService.update(id, movieUpdateInput);
  }

  // Film törlése
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.movieService.remove(id);
  }
}
