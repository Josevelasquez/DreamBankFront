import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestProductRoutingModule } from './request-product-routing.module';
import { RequestProductComponent } from './request-product.component';


@NgModule({
  declarations: [RequestProductComponent],
  imports: [
    CommonModule,
    RequestProductRoutingModule
  ]
})
export class RequestProductModule { }
