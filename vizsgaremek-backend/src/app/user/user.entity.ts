import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Like } from '../like/like.entity';
import { Rating } from '../rating/rating.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => Rating, (rating) => rating.user)
  ratings: Rating[];

  @OneToMany(() => Like, (like) => like.user)
  likes: Like[];
}
