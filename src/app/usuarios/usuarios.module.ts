import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioDetailComponent } from './components/usuario-detail/usuario-detail.component';


@NgModule({
  declarations: [UsuariosComponent, UsuarioComponent, UsuarioDetailComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
