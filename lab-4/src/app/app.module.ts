import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';

// NZ imports
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent, PostFormComponent, PostComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
    HttpClientModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
