import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { Post } from '../models/post/post.model';

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

  @Output() onFinish = new EventEmitter<Post>();

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

    const newPostPayload = this.postForm.getRawValue();

    this.onFinish.emit(
      new Post({ id: crypto.randomUUID(), ...newPostPayload })
    );

    this.formDirective.resetForm();
  }
}
