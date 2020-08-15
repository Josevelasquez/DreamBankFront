import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestProductComponent } from './request-product.component';

const routes: Routes = [{ path: '', component: RequestProductComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestProductRoutingModule { }
