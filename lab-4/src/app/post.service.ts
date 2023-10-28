import { Injectable } from '@angular/core';
import { CreatePostPayload } from './types/create-post-payload';
import { Post } from './post.model';

@Injectable()
export class PostService {
  private storageKey = 'posts';

  constructor(private storage: Storage) {}

  private get items(): Post[] {
    const storageData = this.storage.getItem(this.storageKey);
    return storageData ? JSON.parse(storageData) : [];
  }

  private set items(posts: Post[]) {
    this.storage.setItem(this.storageKey, JSON.stringify(posts));
  }

  getAllPosts() {
    return this.items;
  }

  createPost(postPayload: CreatePostPayload) {
    const newPost = new Post({ id: crypto.randomUUID(), ...postPayload });
    this.items = [newPost, ...this.items];

    return newPost;
  }

  deletePost(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
    return true;
  }
}
