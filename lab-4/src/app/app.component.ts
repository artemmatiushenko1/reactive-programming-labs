import { Component } from '@angular/core';
import { Post } from './models/post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts: Post[] = [
    {
      id: crypto.randomUUID(),
      title: 'Top 5 UI Library for Angular',
      content:
        'Angular is the one of the popular and in demand front end framework to create large scale enterprise web application. Most of the large banks, insurance companies, e-Commerce companies and some of the renowned product based companies are using Angular for their front end stack.',
    },
    {
      id: crypto.randomUUID(),
      title: 'Angular Component Library Best Practices',
      content:
        'UI components are an essential part of every user-facing Angular application. Material, ngx-bootstrap, and primeng are probably the most known UI libraries amongst many great libraries.',
    },
    {
      id: crypto.randomUUID(),
      title: 'Best Angular Libraries to Boost Your Development in 2023',
      content:
        'If you are a developer, you can understand the importance of a platform that speeds up the development process, significantly reducing coding time and effort.',
    },
  ];
}
