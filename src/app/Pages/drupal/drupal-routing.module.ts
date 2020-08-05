import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrupalPage } from './drupal.page';

const routes: Routes = [
  {
    path: '',
    component: DrupalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrupalPageRoutingModule {}
