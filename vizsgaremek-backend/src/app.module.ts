import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './app/movie/movie.module';
import { Movie } from './app/movie/movie.entity';
import { RatingModule } from './app/rating/rating.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './app/auth/auth.module';
import { User } from './app/user/user.entity';
import { Rating } from './app/rating/rating.entity';
import { Like } from './app/like/like.entity';
import { LikeModule } from './app/like/like.module';

@Module({
  imports: [
    // Load environment variables from .env file globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrm configuration for PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Test1234!',
      database: 'vizsgaremek',
      entities: [Movie, User, Rating, Like], // TODO: rest of the entities
      synchronize: true,
      autoLoadEntities: true,
    }),
    MovieModule,
    RatingModule,
    AuthModule,
    LikeModule,
    // TODO: rest of the modules !!!
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
