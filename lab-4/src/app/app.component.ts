import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PostService } from './post.service';
import { CreatePostPayload } from './types/create-post-payload';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(
    private message: NzMessageService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const allPosts = this.postService.getAllPosts();
    this.posts = allPosts;
  }

  handlePostFormFinish(postPayload: CreatePostPayload) {
    const newPost = this.postService.createPost(postPayload);

    this.posts.unshift(newPost);
    this.message.success('New post created successfully!');
  }

  handlePostDelete(id: string) {
    const hasBeedDeleted = this.postService.deletePost(id);

    if (hasBeedDeleted) {
      this.posts = this.posts.filter((post) => post.id !== id);
      this.message.info('Post deleted successfully!');
    }
  }
}
