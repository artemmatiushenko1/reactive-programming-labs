import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
      <p [appValueSize]="fontSize" [defaultSize]="14">Hello Angular</p>
      <p>Angular представляє модульну архітектуру додатку</p>
    </div>
    <div>
      <label for="fontSize">
        <span>Введіть розмір шрифта: </span>
        <input [(ngModel)]="fontSize" type="number" min="0" id="fontSize" />
      </label>
      <div [ngStyle]="{ fontSize: fontSize + 'px' }">
        Поточний розмір шрифта: {{ fontSize }}
      </div>
    </div>`,
})
export class AppComponent {
  fontSize: number = 14;
}
