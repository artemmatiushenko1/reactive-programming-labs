import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: 'cart-summary.component.html',
  styles: [``],
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}
}
