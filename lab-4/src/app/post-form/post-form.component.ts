import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { CreatePostPayload } from '../types/create-post-payload';

interface PostForm {
  title: FormControl<string>;
  content: FormControl<string>;
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent {
  'postForm': FormGroup<PostForm>;

  @ViewChild(FormGroupDirective)
  private 'formDirective': FormGroupDirective;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.postForm = this.fb.nonNullable.group<PostForm>({
      title: this.fb.nonNullable.control('', [Validators.required]),
      content: this.fb.nonNullable.control('', [Validators.required]),
    });
  }

  @Output() onFinish = new EventEmitter<CreatePostPayload>();

  handleFormSubmit() {
    if (!this.postForm.valid) {
      Object.values(this.postForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });

      return;
    }

    const newPostPayload: CreatePostPayload = this.postForm.getRawValue();

    this.onFinish.emit(newPostPayload);

    this.formDirective.resetForm();
  }
}
