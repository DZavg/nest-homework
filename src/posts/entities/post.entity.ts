import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'int', default: 0 })
  claps: number;

  @Column({ type: 'varchar', default: new Date().toISOString() })
  createdAt: number;

  @Column({ type: 'varchar', default: new Date().toISOString() })
  updateAt: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;
}
