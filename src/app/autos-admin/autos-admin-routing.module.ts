import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutosAdminContainer } from './container/autos-admin/autos-admin.container';

const routes: Routes = [
  {
    path:'',
    component: AutosAdminContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosAdminRoutingModule { }
