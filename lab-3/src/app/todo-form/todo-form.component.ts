import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { TodoItem } from '../models';

interface TodoForm {
  title: FormControl<string>;
  deadlineDate: FormControl<Date | undefined>;
}

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  todoForm = this.fb.nonNullable.group<TodoForm>({
    title: this.fb.nonNullable.control('', [Validators.required]),
    deadlineDate: this.fb.nonNullable.control(undefined),
  });

  constructor(private fb: FormBuilder) {}

  get title() {
    return this.todoForm.get('title');
  }

  get deadlineDate() {
    return this.todoForm.get('deadlineDate');
  }

  @Output() onFinish = new EventEmitter<
    Pick<TodoItem, 'title' | 'deadlineDate'>
  >();

  handleFormSubmit(formDirective: FormGroupDirective): void {
    if (this.todoForm.valid) {
      const newTodo = this.todoForm.getRawValue();
      this.onFinish.emit(newTodo);
      formDirective.resetForm();
      this.todoForm.reset();
    }
  }
}
