import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
})
export class Task8Component {
  name: string = 'Tom';
  age: number = 24;
  clicks: number = 0;

  onChanged(increased: boolean) {
    if (increased) {
      this.clicks++;
    } else {
      this.clicks--;
    }
  }
}
