import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { NotifyService } from './services/notify.service';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { UserService } from './services/user.service';
import { MarcaService } from '@core/services/marca.service';
import { AutoService } from '@core/services/auto.service';
import { TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    NotifyService,
    StorageService,
    UserService,
    MarcaService,
    AutoService
  ]
})
export class CoreModule { }
