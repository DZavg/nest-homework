import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Post} from "./posts/entities/post.entity";
import {DataSource} from "typeorm";
import { UsersModule } from './users/users.module';
import {User} from "./users/entities/user.entity";

const database = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'nest-homework',
  entities: [User, Post],
  synchronize: true,
  autoLoadEntities: true,
});

@Module({
  imports: [
    database,
    PostsModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}

