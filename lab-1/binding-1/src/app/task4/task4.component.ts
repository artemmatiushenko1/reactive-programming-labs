import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
})
export class Task4Component {
  count1 = 0;
  count2 = 0;

  increase() {
    this.count1 += 1;
  }

  increase2(event: MouseEvent) {
    this.count2 += 1;
    console.log({ event });
  }
}
