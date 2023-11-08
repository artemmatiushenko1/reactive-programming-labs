import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CounterDirective } from './counter.directive';

@NgModule({
  imports: [
    ModelModule,
    BrowserModule,
    FormsModule,
    NzLayoutModule,
    NzCardModule,
    NzTagModule,
    NzGridModule,
    NzRadioModule,
    NzSpaceModule,
    NzSelectModule,
  ],
  declarations: [StoreComponent, CounterDirective],
  exports: [StoreComponent],
})
export class StoreModule {}
