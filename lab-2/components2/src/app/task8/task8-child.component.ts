import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task8-child',
  template: `<p>Ім’я користувача: {{ userName }}</p>
    <p>Вік користувача: {{ userAge }}</p>
    <button (click)="change(true)">+</button>
    <button (click)="change(false)">-</button>`,
})
export class Task8ChildComponent {
  @Input() userName: string = '';
  _userAge: number = 0;

  @Input()
  set userAge(age: number) {
    if (age < 0) this._userAge = 0;
    else if (age > 100) this._userAge = 100;
    else this._userAge = age;
  }

  get userAge() {
    return this._userAge;
  }

  @Output() onChanged = new EventEmitter<boolean>();

  change(increased: boolean) {
    this.onChanged.emit(increased);
  }
}
