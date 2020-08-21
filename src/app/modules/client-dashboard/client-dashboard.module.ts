import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';
import { ClientDashboardComponent } from './client-dashboard.component';
import { ClientDetailProductComponent } from './components/clientDetailProduct/client-detail-product.component';
import { ClientDashboardMainComponent } from './components/clientDashboardMain/client-dashboard-main/client-dashboard-main.component';
import { HeaderDashboardComponent } from './components/headerDashboard/header-dashboard/header-dashboard.component';
import { StckyMenuComponent } from './components/stickyMenu/stcky-menu/stcky-menu.component';


@NgModule({
  declarations: [ClientDashboardComponent, ClientDetailProductComponent, ClientDashboardMainComponent, HeaderDashboardComponent, StckyMenuComponent],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule,
    MatTableModule
  ]
})
export class ClientDashboardModule { }
