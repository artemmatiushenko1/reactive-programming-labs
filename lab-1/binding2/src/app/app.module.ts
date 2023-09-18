import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskWrapperComponent } from './task-wrapper/task-wrapper.component';
import { Task6Component } from './task6/task6.component';
import { FormsModule } from '@angular/forms';
import { Task7Component } from './task7/task7.component';

@NgModule({
  declarations: [AppComponent, TaskWrapperComponent, Task6Component, Task7Component],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
