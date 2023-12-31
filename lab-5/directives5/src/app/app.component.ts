import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <label for="numberA">
      <span>Number A: </span>
      <input type="number" id="numberA" [(ngModel)]="numberA" />
    </label>
    <label for="numberB">
      <span>Number B: </span>
      <input type="number" id="numberB" [(ngModel)]="numberB" />
    </label>
    <div *sum="let result; from: numberA; and: numberB">
      Result: {{ result }}
    </div>
    <ng-template sum let-result [sumFrom]="numberA" [sumAnd]="numberB">
      Result: {{ result }}
    </ng-template>
  `,
})
export class AppComponent {
  'numberA': number;
  'numberB': number;
}
