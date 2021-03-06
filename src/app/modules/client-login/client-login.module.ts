import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { ClientLoginComponent } from './client-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ClientLoginComponent, HeaderComponent, FormLoginComponent],
  imports: [
    CommonModule,
    ClientLoginRoutingModule,
    SharedModule
  ]
})
export class ClientLoginModule { }
