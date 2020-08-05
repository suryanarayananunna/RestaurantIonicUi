import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DessertsPage } from './desserts.page';

const routes: Routes = [
  {
    path: '',
    component: DessertsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DessertsPageRoutingModule {}
