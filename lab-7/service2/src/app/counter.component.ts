import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Компонент counter.component.ts</h1>
    <h2>Сервіс верхнього рівня App Counter {{ appCounterService.counter }}</h2>
    <button class="btn" (click)="appCounterService.increase()">+</button>
    <button class="btn" (click)="appCounterService.decrease()">-</button>
    <h2>
      Сервіс рівня компоненту Local Counter {{ localCounterService.counter }}
    </h2>
    <button class="btn" (click)="localCounterService.increase()">+</button>
    <button class="btn" (click)="localCounterService.decrease()">-</button>
    <hr />
  `,
  providers: [LocalCounterService],
})
export class CounterComponent {
  constructor(
    protected appCounterService: AppCounterService,
    protected localCounterService: LocalCounterService
  ) {}
}
