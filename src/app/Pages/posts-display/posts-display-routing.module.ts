import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsDisplayPage } from './posts-display.page';

const routes: Routes = [
  {
    path: '',
    component: PostsDisplayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsDisplayPageRoutingModule {}
