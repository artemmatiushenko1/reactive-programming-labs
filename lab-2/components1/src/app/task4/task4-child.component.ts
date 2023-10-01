import { Component } from '@angular/core';

@Component({
  selector: 'app-task4-child',
  template: `<h2>Ласкаво просимо {{ name }}!</h2>`,
  styles: [
    `
      h2,
      p {
        color: red;
      }
    `,
  ],
})
export class Task4ChildComponent {
  name = 'Тарас';
}
