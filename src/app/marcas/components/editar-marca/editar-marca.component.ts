import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MarcaRequestEditModel } from '@core/models/marca-request-edit.model';

@Component({
  selector: 'app-editar-marca',
  templateUrl: './editar-marca.component.html',
  styleUrls: ['./editar-marca.component.scss']
})
export class EditarMarcaComponent implements OnInit {

  @Input() marcaModel: MarcaRequestEditModel;
  @Output() editarMarcaClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onEditClicked(): void {
    this.editarMarcaClick.emit();
  }

}
