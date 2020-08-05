import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainCoursePageRoutingModule } from './main-course-routing.module';

import { MainCoursePage } from './main-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainCoursePageRoutingModule
  ],
  declarations: [MainCoursePage]
})
export class MainCoursePageModule {}
