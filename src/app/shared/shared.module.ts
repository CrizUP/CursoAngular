import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';
@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
    LocalizedDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
    RouterModule,
    LocalizedDatePipe
  ]
})
export class SharedModule { }
