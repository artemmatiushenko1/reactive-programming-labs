import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task7Component } from './task7/task7.component';
import { Task7ChildComponent } from './task7/task7-child.component';
import { FormsModule } from '@angular/forms';
import { TaskWrapperComponent } from './task-wrapper/task-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskWrapperComponent,
    Task7Component,
    Task7ChildComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
