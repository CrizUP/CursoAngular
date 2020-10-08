import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosContainer } from './container/autos/autos.container';
import { AutosAdminContainer } from './container/autos-admin/autos-admin.container';
import { RegistrarAutoContainer } from './container/registrar-auto/registrar-auto.container';
import { EditarAutoContainer } from './container/editar-auto/editar-auto.container';

const routes: Routes = [
  {
    path: '',
    component: AutosContainer
  },
  {
    path: 'admin',
    component: AutosAdminContainer
  },
  {
    path: 'admin/registrar',
    component: RegistrarAutoContainer
  },
  {
    path: 'admin/editar/:id',
    component: EditarAutoContainer
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
