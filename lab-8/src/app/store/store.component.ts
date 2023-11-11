import { Component } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';

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
  productsPerPage = 4;
  selectedPage = 1;

  productsPerPageOptions = [3, 4, 6, 8];

  constructor(private repository: ProductRepository, private cart: Cart) {}

  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

    return this.repository
      .getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  get pageCount(): number {
    return Math.ceil(
      this.repository.getProducts(this.selectedCategory).length /
        this.productsPerPage
    );
  }

  addProductToCart(product: Product) {
    this.cart.addLine(product);
  }
}
