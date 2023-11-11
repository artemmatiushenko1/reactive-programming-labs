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
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary.component';
import { HttpClientModule } from '@angular/common/http';
import { CartDetailComponent } from './cart-detail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';

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
    HttpClientModule,
    NzIconModule,
    NzBadgeModule,
    NzButtonModule,
    RouterModule,
  ],
  declarations: [
    StoreComponent,
    CounterDirective,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
