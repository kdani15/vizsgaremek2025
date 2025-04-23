import {
  BeforeInsert,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export abstract class BaseEntity {
  @PrimaryColumn('text')
  id!: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', precision: 3 })
  createdAt!: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP', precision: 3 })
  updatedAt!: Date;

  @BeforeInsert()
  createId(): void {
    if (!this.id) {
      this.id = uuidv4(); // Generate a new UUID if not already set
    }
  }
}
