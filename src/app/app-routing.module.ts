import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/client-dashboard/client-dashboard.module').then(
        (m) => m.ClientDashboardModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/client-login/client-login.module').then(
        (m) => m.ClientLoginModule
      ),
  },
  {
    path: 'request_product',
    loadChildren: () =>
      import('./modules/request-product/request-product.module').then(
        (m) => m.RequestProductModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
