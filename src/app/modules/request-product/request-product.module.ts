import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestProductRoutingModule } from './request-product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RequestProductRoutingModule,
    SharedModule
  ]
})
export class RequestProductModule { }
