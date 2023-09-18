import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { TaskWrapperComponent } from './task-wrapper/task-wrapper.component';

@NgModule({
  declarations: [AppComponent, Task1Component, Task2Component, Task3Component, Task4Component, TaskWrapperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
