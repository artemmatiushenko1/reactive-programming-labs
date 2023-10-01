import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { Task4ChildComponent } from './task4/task4-child.component';
import { TaskWrapperComponent } from './task-wrapper/task-wrapper.component';
import { Task5Component } from './task5/task5.component';
import { Task5ChildComponent } from './task5/task5-child.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    Task4Component,
    Task4ChildComponent,
    TaskWrapperComponent,
    Task5Component,
    Task5ChildComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
