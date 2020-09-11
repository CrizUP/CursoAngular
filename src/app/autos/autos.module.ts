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

@NgModule({
  declarations: [
    AutoComponent,
    AutosContainer,
    AutoDetailComponent,
    RegistrarAutoContainer,
    RegistrarAutoComponent
  ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AutosModule { }
