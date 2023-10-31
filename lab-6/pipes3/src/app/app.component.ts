import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let user of users | async">
        <p>Ім’я користувача: {{ user['name'] }}</p>
        <p>Вік користувача: {{ user['age'] }}</p>
      </li>
    </ul>
  `,
})
export class AppComponent {
  users?: Observable<Record<string, string>[]>;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.users = this.httpService.getUsers();
  }
}
