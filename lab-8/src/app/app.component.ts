import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-layout>
      <cart-summary ngProjectAs="header-extra"></cart-summary>
      <router-outlet></router-outlet>
    </app-layout>
  `,
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
