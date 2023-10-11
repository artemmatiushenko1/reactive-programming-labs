import { Component } from '@angular/core';
import { TodoItem, TodoList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private list = new TodoList('Тарас', [
    new TodoItem('Зробити пробіжку', true),
    new TodoItem('Купити квіти'),
    new TodoItem('Забрати квитки'),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter((item) => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items;
  }
}
