import { Entity, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';
import { BaseEntity } from '../common/base.entity';

@Entity()
export class Watchlist extends BaseEntity {
  @ManyToOne(() => User, (user) => user.watchlists)
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.watchlists)
  movie: Movie;
}
