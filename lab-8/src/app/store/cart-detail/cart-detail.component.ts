import { Component } from '@angular/core';
import { Cart } from '../../model/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styles: [
    `
      :host {
        display: flex;
        height: 100%;
        justify-content: center;
      }

      .content {
        height: 100%;
        width: 50%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        padding: 30px;
        align-items: center;
        row-gap: 30px;
      }

      nz-table {
        flex: 1;
        height: 0;
      }
    `,
  ],
})
export class CartDetailComponent {
  constructor(public cart: Cart) {}
}
