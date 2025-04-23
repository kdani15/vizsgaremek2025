import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Entity()
export class Rating extends BaseEntity {
  @Column({ type: 'int' })
  rating: number;

  @ManyToOne(() => User, (user) => user.ratings, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.ratings, { onDelete: 'CASCADE' })
  movie: Movie;
}
