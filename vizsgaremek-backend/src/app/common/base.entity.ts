import {
  BeforeInsert,
  CreateDateColumn,
  DeleteDateColumn,
  Index,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

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
  async createId(): Promise<void> {
    // generate id if not present
    if (this.id) return;

    const { nanoid } = await import('nanoid');
    this.id = nanoid();
  }
}
