import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PruebaDirectoriosPageRoutingModule } from './prueba-directorios-routing.module';

import { PruebaDirectoriosPage } from './prueba-directorios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PruebaDirectoriosPageRoutingModule
  ],
  declarations: [PruebaDirectoriosPage]
})
export class PruebaDirectoriosPageModule {}
