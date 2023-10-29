import { Component } from '@angular/core';

@Component({
  selector: 'app-task-ngstyle',
  template: `
    <div
      [ngStyle]="{
        'font-size': '13px',
        'font-family': 'Verdana',
        color: 'green'
      }"
    >
      <h1>Вивчаємо директиви</h1>
      <p [ngStyle]="{ 'font-size': '16px', 'font-family': 'Segoe Print' }">
        Використання атрибутивної директиви [ngStyle]
      </p>
    </div>
    <div [style.fontSize]="'13px'" [style.fontFamily]="'Verdana'">
      <h1>Hello Angular 16</h1>
      <p [style.fontSize]="'14px'" [style.fontFamily]="'Segoe Print'">
        Angular 16 представляє модульну архітектуру додатку
      </p>
    </div>
  `,
  styles: [
    `
      .verdanaFont {
        font-size: 13px;
        font-family: Verdana;
      }
      .segoePrintFont {
        font-size: 16px;
        font-family: 'Segoe Print';
      }
      .navyColor {
        color: navy;
      }
    `,
  ],
})
export class TaskNgstyleComponent {
  isVerdana = true;
  isSegoe = true;
  isNavy = true;

  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy,
  };
}
