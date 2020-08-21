import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLoginRoutingModule } from './client-login-routing.module';
import { ClientLoginComponent } from './client-login.component';
import { HeaderComponent } from './components/header/header.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientLoginComponent, HeaderComponent, FormLoginComponent],
  imports: [
    CommonModule,
    ClientLoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientLoginModule { }
