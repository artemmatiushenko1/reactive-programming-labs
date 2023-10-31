import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'postFilter',
  pure: false,
})
export class PostFilterPipe implements PipeTransform {
  transform(posts: Post[], searchQuery: string | null): Post[] {
    if (!searchQuery?.trim()) {
      return posts;
    }

    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}
