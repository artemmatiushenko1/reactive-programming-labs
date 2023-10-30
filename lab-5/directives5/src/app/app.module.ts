import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SumDirective } from './sum.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, SumDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
