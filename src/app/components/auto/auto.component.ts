import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Auto } from '../../auto.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {
  @Input() auto: Auto;
  @Output() seVendioAuto: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  comprar(id: string) : void{
    this.seVendioAuto.emit();
  }

}
