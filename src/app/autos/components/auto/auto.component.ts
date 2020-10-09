import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AutoResponseModel } from '@core/models/auto-response.model';
import { Auto } from '../../../core/models/auto.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

  imagen = './../../../../assets/images/imagen2.jpg';
  @Input() auto: AutoResponseModel;
  @Output() seVendioAuto: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  comprar(id: string): void {
    this.seVendioAuto.emit();
  }

}
