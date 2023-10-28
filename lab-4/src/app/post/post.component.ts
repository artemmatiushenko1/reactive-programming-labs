import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() 'id': string;
  @Input() 'title': string;
  @Input() 'content': string;

  @Output() onDelete = new EventEmitter<string>();

  handleDeleteClick() {
    this.onDelete.emit(this.id);
  }
}
