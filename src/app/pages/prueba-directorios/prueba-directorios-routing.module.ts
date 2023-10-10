import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaDirectoriosPage } from './prueba-directorios.page';

const routes: Routes = [
  {
    path: '',
    component: PruebaDirectoriosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PruebaDirectoriosPageRoutingModule {}
