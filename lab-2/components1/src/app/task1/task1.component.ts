import { Component } from '@angular/core';

@Component({
  selector: 'app-task1',
  template: `
    <label>Введіть ім'я:</label>
    <input [(ngModel)]="name" placeholder="name" />
    <h1>Ласкаво просимо {{ name }}!</h1>
  `,
})
export class Task1Component {
  name = '';
}
