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
import { UserModule } from './app/user/user.module';
import { Watchlist } from './app/watchlist/watchlist.entity';
import { WatchlistModule } from './app/watchlist/watchlist.module';
import { Seen } from './app/seen/seen.entity';
import { SeenModule } from './app/seen/seen.module';

@Module({
  imports: [
    // Load environment variables from .env file globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // TypeOrm configuration for PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Movie, User, Rating, Like, Watchlist, Seen],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MovieModule,
    UserModule,
    RatingModule,
    LikeModule,
    WatchlistModule,
    SeenModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
