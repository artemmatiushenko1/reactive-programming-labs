import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<store></store>',
  styles: [
    `
      :host {
        display: block;
        height: 100vh;
      }
    `,
  ],
})
export class AppComponent {
  title = 'sportShop';
}
