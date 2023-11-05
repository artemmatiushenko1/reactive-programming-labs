import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Phone } from './phone.model';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  providers: [DataService, LogService],
  template: `
    <div class="row">
      <input
        class="form-control cardinput"
        [(ngModel)]="name"
        placeholder="Модель"
      />
      <input
        type="number"
        class="form-control cardinput"
        [(ngModel)]="price"
        placeholder="Ціна"
      />
      <button class="btn btn-default cardinput" (click)="addItem(name, price)">
        Додати
      </button>
    </div>
    <table>
      <thead>
        <tr>
          <th class="cardinput">Модель</th>
          <th class="cardinput">Ціна</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let item of items">
          <td class="cardinput">{{ item.name }}</td>
          <td class="cardinput">{{ item.price }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      .cardinput {
        margin: 0.4rem 1rem;
      }
      td {
        padding: 5px;
        margin: 0.4rem 1.8rem;
      }
      table {
        width: 100%;
        overflow: auto;
        color: rgb(0, 0, 0);
        border-spacing: 1px;
        table-layout: fixed;
      }
      th {
        padding: 5px;
        margin: 0.4rem 1.8rem;
        text-align: left;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  'price': number;
  name: string = '';
  items: Phone[] = [];

  constructor(private dataService: DataService) {}

  addItem(name: string, price: number) {
    this.dataService.addData(name, price);
  }

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}
