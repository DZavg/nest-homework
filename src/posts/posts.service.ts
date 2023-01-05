import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    const post = new Post();
    post.title = createPostDto.title;
    post.description = createPostDto.description;

    return this.postsRepository.save(post);
  }

  findAll(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  findOne(id: number): Promise<Post> {
    return this.postsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
