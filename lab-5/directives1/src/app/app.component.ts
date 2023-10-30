import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>NgClass</h1>
    <app-task-ngclass></app-task-ngclass>
    <h1>NgStyle</h1>
    <app-task-ngstyle></app-task-ngstyle>
  `,
})
export class AppComponent {}
