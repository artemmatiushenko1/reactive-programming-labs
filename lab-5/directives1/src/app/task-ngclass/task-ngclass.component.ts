import { Component } from '@angular/core';

@Component({
  selector: 'app-task-ngclass',
  template: ` <div [ngClass]="{ verdanaFont: isVerdana }">
      <h1>Hello Angular</h1>
      <p [ngClass]="{ segoePrintFont: isSegoe }">
        Angular представляє модульну архітектуру додатку
      </p>
    </div>
    <div [ngClass]="currentClasses">
      <h1>Hello Angular</h1>
      <p>Angular представляє модульну архітектуру додатку</p>
    </div>`,
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
export class TaskNgclassComponent {
  isVerdana = true;
  isSegoe = true;
  isNavy = true;

  currentClasses = {
    verdanaFont: this.isVerdana,
    navyColor: this.isNavy,
  };
}
