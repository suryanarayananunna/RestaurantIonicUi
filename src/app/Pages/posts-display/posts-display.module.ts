import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsDisplayPageRoutingModule } from './posts-display-routing.module';

import { PostsDisplayPage } from './posts-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsDisplayPageRoutingModule
  ],
  declarations: [PostsDisplayPage]
})
export class PostsDisplayPageModule {}
