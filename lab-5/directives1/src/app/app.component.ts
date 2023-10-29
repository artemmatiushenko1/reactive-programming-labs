import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>NgClass</h1>
    <app-task-ngclass [visibility]="visibility"></app-task-ngclass>
    <h1>NgStyle</h1>
    <app-task-ngstyle></app-task-ngstyle>
    <button (click)="toggle()">Toggle</button>
  `,
})
export class AppComponent {
  visibility: boolean = true;

  toggle() {
    this.visibility = !this.visibility;
  }
}
