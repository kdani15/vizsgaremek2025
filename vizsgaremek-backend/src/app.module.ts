import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieModule } from './app/movie/movie.module';
import { Movie } from './app/movie/movie.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Test1234!',
      database: 'vizsgaremek',
      entities: [Movie],
      synchronize: true,
      autoLoadEntities: true,
    }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
