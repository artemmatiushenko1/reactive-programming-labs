import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
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
