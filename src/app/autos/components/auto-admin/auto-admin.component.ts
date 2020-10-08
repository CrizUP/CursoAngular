import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoResponseModel } from '@core/models/auto-response.model';

@Component({
  selector: 'app-auto-admin',
  templateUrl: './auto-admin.component.html',
  styleUrls: ['./auto-admin.component.scss']
})
export class AutoAdminComponent implements OnInit {

  imagen = './../../../../assets/images/imagen2.jpg';
  @Input() auto: AutoResponseModel;
  @Output() selectAutoToEdit: EventEmitter<AutoResponseModel> = new EventEmitter<AutoResponseModel>();
  @Output() selectAutoToDelete: EventEmitter<AutoResponseModel> = new EventEmitter<AutoResponseModel>();
  constructor() { }

  ngOnInit(): void {
  }

  EditAuto(): void {
    this.selectAutoToEdit.emit(this.auto);
  }

  DeleteAuto(): void {
    this.selectAutoToDelete.emit(this.auto);
  }

}
