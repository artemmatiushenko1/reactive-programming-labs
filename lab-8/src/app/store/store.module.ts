import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    NzLayoutModule,
    NzCardModule,
    NzTagModule,
    NzGridModule,
  ],
  declarations: [StoreComponent],
  exports: [StoreComponent],
})
export class StoreModule {}
