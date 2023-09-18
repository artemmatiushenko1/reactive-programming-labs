import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-wrapper',
  templateUrl: './task-wrapper.component.html',
})
export class TaskWrapperComponent {
  @Input() 'title': string;
}
