import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskNgclassComponent } from './task-ngclass/task-ngclass.component';
import { TaskNgstyleComponent } from './task-ngstyle/task-ngstyle.component';

@NgModule({
  declarations: [AppComponent, TaskNgclassComponent, TaskNgstyleComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
