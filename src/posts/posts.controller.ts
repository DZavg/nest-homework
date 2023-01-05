import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostElement } from './entities/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('/new')
  create(@Body() createPostDto: CreatePostDto): Promise<PostElement> {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.postsService.remove(id);
  }
}
