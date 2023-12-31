import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { LocalCounterService } from './services/local-counter.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Компонент app.component.ts</h1>
    <h2>Сервіс верхнього рівня App Counter {{ appCounterService.counter }}</h2>
    <button class="btn" (click)="appCounterService.increase()">+</button>
    <button class="btn" (click)="appCounterService.decrease()">-</button>
    <hr />
    <h2>
      Сервіс рівня компоненту Local Counter {{ localCounterService.counter }}
    </h2>
    <button class="btn" (click)="localCounterService.increase()">+</button>
    <button class="btn" (click)="localCounterService.decrease()">-</button>
    <hr />
    <app-counter></app-counter>
  `,
  providers: [LocalCounterService],
})
export class AppComponent {
  title = 'service2';

  constructor(
    protected appCounterService: AppCounterService,
    protected localCounterService: LocalCounterService
  ) {}
}
