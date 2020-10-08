import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoRequestModel } from '@core/models/auto-request.model';
import { MarcaModel } from '@core/models/marca.model';

@Component({
  selector: 'app-editar-auto',
  templateUrl: './editar-auto.component.html',
  styleUrls: ['./editar-auto.component.scss']
})
export class EditarAutoComponent implements OnInit {

  @Input() autoModel: AutoRequestModel;
  @Input() marcasModel: MarcaModel[];
  @Output() editarAutoClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  editarAuto(): void {
    this.editarAutoClick.emit();
  }
}
