import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioDetailComponent } from './components/usuario-detail/usuario-detail.component';
import { LoginComponent } from './components/login/login.component';
import { UsersContainer } from './containers/users/users.container';
import { DevextremeModule } from '@devextreme';
import { LoginContainer } from './containers/login/login.container';


@NgModule({
  declarations: [UsuariosComponent, UsuarioDetailComponent, LoginComponent, UsersContainer, LoginContainer],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    DevextremeModule
  ]
})
export class UsuariosModule { }
