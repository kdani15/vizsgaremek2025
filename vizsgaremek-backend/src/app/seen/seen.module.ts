import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seen } from './seen.entity';
import { SeenService } from './seen.service';
import { SeenController } from './seen.controller';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seen, User, Movie])],
  providers: [SeenService],
  controllers: [SeenController],
})
export class SeenModule {}
