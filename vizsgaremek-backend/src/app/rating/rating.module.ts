import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rating } from './rating.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rating])],
  // providers: [RatingService],
  // controllers: [RatingController],
})
export class RatingModule {}
