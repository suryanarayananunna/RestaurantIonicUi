import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaladsPage } from './salads.page';

const routes: Routes = [
  {
    path: '',
    component: SaladsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaladsPageRoutingModule {}
