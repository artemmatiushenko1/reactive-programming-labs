import { Component } from '@angular/core';

@Component({
  selector: 'app-task-ngfor',
  template: `
    <ul>
      <li *ngFor="let item of items">{{ item }}</li>
    </ul>
    <p *ngFor="let item of items; let i = index">{{ i + 1 }}.{{ item }}</p>
  `,
})
export class TaskNgforComponent {
  items = ['Tom', 'Bob', 'Sam', 'Bill'];
}
