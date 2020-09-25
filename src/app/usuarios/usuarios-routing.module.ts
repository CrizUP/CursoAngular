import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioDetailComponent } from './components/usuario-detail/usuario-detail.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AuthGuard } from '@shared/guards/auth.guard';
import { LoginContainer } from './containers/login/login.container';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    canActivate: [AuthGuard],
    path: 'login',
    component: LoginContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
