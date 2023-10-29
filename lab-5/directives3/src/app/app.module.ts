import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ValueSizeDirective } from './value-size.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ValueSizeDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
