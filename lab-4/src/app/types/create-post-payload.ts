import { Post } from '../models/post/post.model';

export type CreatePostPayload = Pick<Post, 'title' | 'content'>;
