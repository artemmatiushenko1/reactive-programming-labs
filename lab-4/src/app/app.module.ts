import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { PostService } from './post.service';
import { PostFilterPipe } from './post-filter.pipe';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    PostFilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
    NzDividerModule,
    NzCardModule,
    NzDropDownModule,
    NzTagModule,
    NzGridModule,
    NzFormModule,
    NzEmptyModule,
    NzMessageModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    PostService,
    { provide: NZ_I18N, useValue: en_US },
    { provide: Storage, useValue: window.localStorage },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
