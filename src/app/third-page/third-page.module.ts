import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdPagePageRoutingModule } from './third-page-routing.module';

import { ThirdPagePage } from './third-page.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdPagePageRoutingModule
  ],
  declarations: [ThirdPagePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ThirdPagePageModule {}
