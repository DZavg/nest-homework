import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from '../../posts/entities/post.entity';

export enum UserRole {
  WRITER = 'writer',
  READER = 'reader',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  login: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'enum', default: UserRole.READER, enum: UserRole })
  role: string;

  @OneToMany(() => Post, (post) => post.id)
  @JoinColumn()
  posts: Post[];
}
