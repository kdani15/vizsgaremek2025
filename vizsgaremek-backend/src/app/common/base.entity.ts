import {
  BeforeInsert,
  CreateDateColumn,
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

  @BeforeInsert()
  async createId(): Promise<void> {
    // generate id if not present
    if (this.id) return;

    const { nanoid } = await import('nanoid');
    this.id = nanoid();
  }
}
