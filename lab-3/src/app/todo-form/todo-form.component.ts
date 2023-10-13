import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
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
export class TodoFormComponent implements OnInit {
  'todoForm': FormGroup<TodoForm>;

  @ViewChild(FormGroupDirective)
  private 'formDirective': FormGroupDirective;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.todoForm = this.fb.nonNullable.group<TodoForm>({
      title: this.fb.nonNullable.control('', [Validators.required]),
      deadlineDate: this.fb.nonNullable.control(undefined),
    });
  }

  get title() {
    return this.todoForm.get('title');
  }

  get deadlineDate() {
    return this.todoForm.get('deadlineDate');
  }

  @Output() onFinish = new EventEmitter<
    Pick<TodoItem, 'title' | 'deadlineDate'>
  >();

  handleFormSubmit(): void {
    if (!this.todoForm.valid) return;

    const newTodo = this.todoForm.getRawValue();
    this.onFinish.emit(newTodo);

    this.formDirective.resetForm();
  }
}
