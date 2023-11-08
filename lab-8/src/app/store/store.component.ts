import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styles: [
    `
      .layout {
        height: 100vh;
      }

      .layout-inner {
        flex: 1;
        height: 0;
        overflow: hidden;
      }

      nz-header {
        color: #fff;
      }

      nz-content {
        padding: 30px;
        overflow: auto;
      }
    `,
  ],
})
export class StoreComponent {
  constructor(private repository: ProductRepository) {}

  get products(): Product[] {
    return this.repository.getProducts();
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }
}
