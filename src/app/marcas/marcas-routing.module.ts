import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarcasContainer} from './containers/marcas/marcas.container';
const routes: Routes = [
  {
    path: '',
    component: MarcasContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcasRoutingModule { }
