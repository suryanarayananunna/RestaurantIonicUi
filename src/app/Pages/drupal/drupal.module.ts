import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrupalPageRoutingModule } from './drupal-routing.module';

import { DrupalPage } from './drupal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrupalPageRoutingModule
  ],
  declarations: [DrupalPage]
})
export class DrupalPageModule {}
