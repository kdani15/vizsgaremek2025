import { Entity, ManyToOne, Unique } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { User } from '../user/user.entity';
import { Movie } from '../movie/movie.entity';

@Entity()
@Unique(['user', 'movie']) // TODO: mi ez, kell ez ???
export class Like extends BaseEntity {
  @ManyToOne(() => User, (user) => user.likes, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Movie, (movie) => movie.likes, { onDelete: 'CASCADE' })
  movie: Movie;
}
