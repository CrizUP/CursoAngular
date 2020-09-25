import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosAdminRoutingModule } from './autos-admin-routing.module';
import { AutoAdminComponent } from './components/auto-admin/auto-admin.component';
import { AutoDetailAdminComponent } from './components/auto-detail-admin/auto-detail-admin.component';
import { AutosAdminContainer } from './container/autos-admin/autos-admin.container';


@NgModule({
  declarations: [
    AutoAdminComponent, 
    AutoDetailAdminComponent, 
    AutosAdminContainer
    ],
  imports: [
    CommonModule,
    AutosAdminRoutingModule
  ]
})
export class AutosAdminModule { }
