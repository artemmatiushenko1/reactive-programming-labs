import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }
}
