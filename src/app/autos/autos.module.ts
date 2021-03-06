import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosRoutingModule } from './autos-routing.module';
import { AutoComponent } from './components/auto/auto.component';
import { AutosContainer } from './container/autos/autos.container';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { RegistrarAutoContainer } from './container/registrar-auto/registrar-auto.container';
import { RegistrarAutoComponent } from './components/registrar-auto/registrar-auto.component';
import { AutosAdminContainer } from './container/autos-admin/autos-admin.container';
import { AutoAdminComponent } from './components/auto-admin/auto-admin.component';
import { EditarAutoComponent } from './components/editar-auto/editar-auto.component';
import { EditarAutoContainer } from './container/editar-auto/editar-auto.container';
import { DevextremeModule } from '@devextreme';

@NgModule({
  declarations: [
    AutoComponent,
    AutosContainer,
    AutoDetailComponent,
    RegistrarAutoContainer,
    RegistrarAutoComponent,
    AutosAdminContainer,
    AutoAdminComponent,
    EditarAutoComponent,
    EditarAutoContainer
  ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    SharedModule,
    MaterialModule,
    DevextremeModule,
  ]
})
export class AutosModule { }
