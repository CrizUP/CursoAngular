import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosContainer } from './container/autos/autos.container';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { AutosAdminContainer } from './container/autos-admin/autos-admin.container';
import { RegistrarAutoContainer } from './container/registrar-auto/registrar-auto.container';

const routes: Routes = [
  {
    path: '',
    component: AutosContainer
  },
  {
    path: 'admin',
    component: RegistrarAutoContainer
  },
  // {
  //   path: 'admin/registrar',
  //   component: RegistrarAutoContainer
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
