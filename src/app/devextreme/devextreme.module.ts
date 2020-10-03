import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DxFormModule,
  DxDateBoxModule,
  DxTextAreaModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxLoadPanelModule
} from 'devextreme-angular';
// import { from } from 'rxjs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DxFormModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxLoadPanelModule
  ],
  exports: [
    DxFormModule,
    DxDateBoxModule,
    DxTextAreaModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxLoadPanelModule
  ]
})
export class DevextremeModule { }
