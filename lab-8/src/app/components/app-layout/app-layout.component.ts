import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <nz-layout class="layout">
      <nz-header class="header">
        <div nz-row nzJustify="space-between">
          <div nz-col>SPORT SHOP</div>
          <div nz-col>
            <ng-content select="header-extra" />
          </div>
        </div>
      </nz-header>
      <div class="content">
        <ng-content />
      </div>
    </nz-layout>
  `,
  styles: [
    `
      .layout {
        height: 100vh;
      }

      nz-header {
        color: #fff;
      }

      .content {
        flex: 1;
        height: 0;
      }
    `,
  ],
})
export class AppLayoutComponent {}
