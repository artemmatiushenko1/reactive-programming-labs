import { Component } from '@angular/core';
import { TodoItem, TodoList } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private list = new TodoList('Тарас', [
    new TodoItem('Зробити пробіжку', undefined, true),
    new TodoItem('Купити квіти'),
    new TodoItem('Забрати квитки'),
  ]);

  showComplete: boolean = false;

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter((item) => !item.completed).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(
      (item) => this.showComplete || !item.completed
    );
  }

  formatDate(date?: Date) {
    if (!date) return;

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  }

  handleTodoFormFinish(
    formValues: Pick<TodoItem, 'title' | 'deadlineDate'>
  ): void {
    const { title, deadlineDate } = formValues;
    this.list.addItem(new TodoItem(title, deadlineDate));
  }
}
