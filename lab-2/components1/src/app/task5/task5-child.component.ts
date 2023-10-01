import { Component } from '@angular/core';

@Component({
  selector: 'app-task5-child',
  template: ` <ng-content></ng-content>
    <p>Привіт {{ name }}</p>`,
  styles: [
    `
      h2,
      p {
        color: red;
      }
    `,
  ],
})
export class Task5ChildComponent {
  name = 'Тарас';
}
