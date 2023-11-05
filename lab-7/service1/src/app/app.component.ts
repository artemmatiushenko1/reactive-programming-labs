import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  providers: [DataService, LogService],
  template: `
    <data-comp></data-comp>
    <data-comp></data-comp>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
