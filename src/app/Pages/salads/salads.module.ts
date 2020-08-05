import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaladsPageRoutingModule } from './salads-routing.module';

import { SaladsPage } from './salads.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaladsPageRoutingModule
  ],
  declarations: [SaladsPage]
})
export class SaladsPageModule {}
