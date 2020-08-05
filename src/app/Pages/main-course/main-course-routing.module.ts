import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainCoursePage } from './main-course.page';

const routes: Routes = [
  {
    path: '',
    component: MainCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainCoursePageRoutingModule {}
