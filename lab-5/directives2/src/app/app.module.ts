import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoldDirective } from './bold.directive';
import { ItalicDirective } from './italic.directive';
import { MouseBoldDirective } from './mouse-bold.directive';
import { MouseItalicDirective } from './mouse-italic.directive';
import { HostMouseBoldDirective } from './host-mouse-bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    ItalicDirective,
    MouseBoldDirective,
    MouseItalicDirective,
    HostMouseBoldDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
