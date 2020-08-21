import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientDashboardComponent } from './client-dashboard.component';
import { ClientDetailProductComponent } from './components/clientDetailProduct/client-detail-product.component'
const routes: Routes = [{ path: '', component: ClientDashboardComponent }, { path:'detail/:id', component: ClientDetailProductComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientDashboardRoutingModule { }
