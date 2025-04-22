import {
  BeforeInsert,
  CreateDateColumn,
  DeleteDateColumn,
  Index,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { nanoid } from 'nanoid';

export abstract class BaseEntity {
  @PrimaryColumn('text')
  id!: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', precision: 3 })
  createdAt!: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', precision: 3 })
  updatedAt!: Date;

  @DeleteDateColumn({ precision: 3, nullable: true })
  @Index({ where: '"deleted_at" IS NULL' })
  deletedAt!: Date;

  @BeforeInsert()
  createId(): void {
    // generate id if not present
    if (this.id) return;
    this.id = nanoid();
  }
}
