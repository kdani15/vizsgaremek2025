import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Entity()
export class Seen extends BaseEntity {
  @ManyToOne(() => User, (user) => user.seenMovies, { eager: true })
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.seenByUsers, { eager: true })
  movie: Movie;
}
