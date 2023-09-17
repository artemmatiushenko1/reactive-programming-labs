import { Component } from '@angular/core';

class Item {
  purchase: string;
  done: boolean;
  price: number;

  constructor(purchase: string, price: number) {
    this.purchase = purchase;
    this.price = price;
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text: string = '';
  price: number = 0;

  items: Item[] = [
    { purchase: 'Хліб', done: false, price: 15.9 },
    { purchase: 'Вершкове масло', done: false, price: 60 },
    { purchase: 'Картопля', done: true, price: 22.6 },
    { purchase: 'Сир', done: false, price: 310 },
  ];

  addItem(text: string, price: number): void {
    if (text == null || text.trim() == '' || price == null) return;
    this.items.push(new Item(text, price));
  }
}
