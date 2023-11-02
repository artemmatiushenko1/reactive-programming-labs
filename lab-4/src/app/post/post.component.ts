import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnDestroy {
  longContentSymbolsThreshold = 20;

  ngOnDestroy(): void {
    console.log(`Post component has been destroyed!`);
  }

  @Input() 'id': string;
  @Input() 'title': string;
  @Input() 'content': string;
  @Input() 'createdAt': string;

  @Output() onDelete = new EventEmitter<string>();

  handleDeleteClick() {
    this.onDelete.emit(this.id);
  }
}
