import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AutoRequestModel } from '@core/models/auto-request.model';
import { MarcaModel } from '@core/models/marca.model';

@Component({
  selector: 'app-registrar-auto',
  templateUrl: './registrar-auto.component.html',
  styleUrls: ['./registrar-auto.component.scss']
})
export class RegistrarAutoComponent implements OnInit {

  @Input() autoModel: AutoRequestModel;
  @Input() marcasModel: MarcaModel[];
  @Output() registrarAutoClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  registrarAuto(): void {
    this.registrarAutoClick.emit();
  }

}
