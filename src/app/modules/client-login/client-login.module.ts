import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { ClientLoginComponent } from './client-login.component';


@NgModule({
  declarations: [ClientLoginComponent],
  imports: [
    CommonModule,
    ClientLoginRoutingModule
  ]
})
export class ClientLoginModule { }
