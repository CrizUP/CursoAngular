import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosContainer } from './container/autos/autos.container';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { AutosAdminContainer } from './container/autos-admin/autos-admin.container';

const routes: Routes = [
  {
    path: '',
    component: AutosContainer
  },
  {
    path: ':id',
    component: AutoDetailComponent
  },
  {
    path: 'admin',
    component: AutosAdminContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
