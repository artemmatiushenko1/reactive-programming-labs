import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
})
export class ChildComponentComponent {
  @Input() userName: string = '';

  @Output() userNameChange = new EventEmitter<string>();

  onNameChange(model: string) {
    this.userName = model;
    this.userNameChange.emit(model);
  }
}
