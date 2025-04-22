import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common/base.entity';

@Entity()
export class Movie extends BaseEntity {
  @Column()
  title: string;

  @Column()
  year: number;

  @Column('text')
  description: string;

  @Column('float', { default: 0 })
  averageRating: number;
}
