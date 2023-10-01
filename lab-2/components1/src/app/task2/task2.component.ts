import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  template: `
    <h2>Hello Angular</h2>
    <p>Angular 16 представляє модульну архітектуру додатку</p>
  `,
  styles: [
    `
      h2,
      h3 {
        color: navy;
      }

      p {
        font-size: 13px;
        font-family: Verdana;
      }

      :host {
        font-family: Verdana;
        color: #555;
      }
    `,
  ],
})
export class Task2Component {}
