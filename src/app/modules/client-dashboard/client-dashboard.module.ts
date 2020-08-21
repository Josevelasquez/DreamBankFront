import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';
import { ClientDashboardComponent } from './client-dashboard.component';
import { ClientDetailProductComponent } from './components/clientDetailProduct/client-detail-product.component';


@NgModule({
  declarations: [ClientDashboardComponent, ClientDetailProductComponent],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    MatTableModule
  ]
})
export class ClientDashboardModule { }
