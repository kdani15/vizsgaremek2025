import { Entity, ManyToOne, Unique } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Entity()
@Unique(['user', 'movie']) // A user can like a movie only once — the same (user_id, movie_id) pair cannot appear more than once in the like table.
export class Like extends BaseEntity {
  @ManyToOne(() => User, (user) => user.likes, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.likes, { onDelete: 'CASCADE' })
  movie: Movie;
}
