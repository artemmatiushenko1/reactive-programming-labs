import { Post } from '../post.model';

export type CreatePostPayload = Pick<Post, 'title' | 'content'>;
