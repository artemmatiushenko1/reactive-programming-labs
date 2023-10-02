import { Component, Input } from '@angular/core';

@Component({
  selector: 'task-wrapper',
  templateUrl: './task-wrapper.component.html',
  styleUrls: ['./task-wrapper.component.css'],
})
export class TaskWrapperComponent {
  @Input() 'title': string;

  isContentVisible = true;
}
