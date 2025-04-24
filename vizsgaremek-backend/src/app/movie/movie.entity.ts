import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Like } from '../like/like.entity';
import { Rating } from '../rating/rating.entity';
import { Watchlist } from '../watchlist/watchlist.entity';

@Entity()
export class Movie extends BaseEntity {
  @Column()
  title: string;

  @Column()
  releaseYear: number;

  @Column('text')
  description: string;

  @Column({ type: 'varchar', length: 2048, nullable: true })
  posterImg?: string;

  @Column({ type: 'varchar', length: 2048, nullable: true })
  thumbnailImg?: string;

  @OneToMany(() => Rating, (rating) => rating.movie)
  ratings: Rating[];

  @OneToMany(() => Like, (like) => like.movie)
  likes: Like[];

  @OneToMany(() => Watchlist, (watchlist) => watchlist.movie)
  watchlists: Watchlist[];
}
