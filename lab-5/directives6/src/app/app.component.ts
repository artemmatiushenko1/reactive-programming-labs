import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p *appOtherIf="condition" class="otherif a">(A) Condition is false.</p>
    <p *appOtherIf="!condition" class=" otherif b">
      (B) Although the condition is true, this paragraph is displayed.
    </p>
    <button (click)="handleToggleButtonClick()">Toggle</button>
    <span>Current state: {{ condition }}</span>
  `,
})
export class AppComponent {
  condition = false;

  handleToggleButtonClick() {
    console.log('here');
    this.condition = !this.condition;
  }
}
