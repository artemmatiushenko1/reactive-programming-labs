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

      .categories-group,
      .categories-group nz-space,
      .categories-group nz-space label {
        width: 100%;
      }
    `,
  ],
})
export class StoreComponent {
  selectedCategory?: string;

  constructor(private repository: ProductRepository) {}

  get products(): Product[] {
    return this.repository.getProducts(this.selectedCategory);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  handleCategoryChange(newCategory?: string) {
    this.selectedCategory = newCategory;
  }
}
