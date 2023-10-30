import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskNgifComponent } from './task-ngif/task-ngif.component';
import { TaskNgforComponent } from './task-ngfor/task-ngfor.component';
import { TaskNgswitchComponent } from './task-ngswitch/task-ngswitch.component';
import { WhileDirective } from './while.directive';

@NgModule({
  declarations: [
    AppComponent,
    TaskNgifComponent,
    TaskNgforComponent,
    TaskNgswitchComponent,
    WhileDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
