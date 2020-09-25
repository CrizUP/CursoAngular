import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifyService } from './services/notify.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    NotifyService,
    StorageService,
    UserService
  ]
})
export class CoreModule { }
