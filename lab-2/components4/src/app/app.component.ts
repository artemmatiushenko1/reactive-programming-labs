import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit, OnDestroy {
  name = 'Tom';
  age = 25;

  constructor() {
    this.log('constructor');
  }

  ngOnInit() {
    this.log('onInit');
  }

  ngOnDestroy() {
    this.log('onDestroy');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.log(
        `Parent [${propName}]: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }

  private log(msg: string) {
    console.log(msg);
  }
}
