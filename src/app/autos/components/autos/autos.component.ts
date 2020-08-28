import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Auto } from '../../../auto.model';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit, OnChanges {
  autos: Auto[] = [
    {
      año: 2020,
      descripcion: 'Es un auto veloz',
      id: '1',
      modelo: 'Modelo Advance',
      nombre: 'BMW',
      imagen: 'https://cnet4.cbsistatic.com/img/HLLu44FPHv-LnJ0dxJDvbsy-Bh8=/868x488/2019/09/24/21e34422-2496-4472-bb63-12381d85455f/00000img-00000-burst20190624080825073-cover.jpg'
      // imagen: '../../../assets/images/i'
    },
    {
      año: 2020,
      descripcion: 'Es un auto veloz',
      id: '2',
      modelo: 'Modelo Advance',
      nombre: 'Bentli',
      imagen: 'https://cnet4.cbsistatic.com/img/HLLu44FPHv-LnJ0dxJDvbsy-Bh8=/868x488/2019/09/24/21e34422-2496-4472-bb63-12381d85455f/00000img-00000-burst20190624080825073-cover.jpg'
    },
    {
      año: 2020,
      descripcion: 'Es un auto veloz',
      id: '2',
      modelo: 'Modelo Advance',
      nombre: 'Bentli',
      imagen: 'https://cnet4.cbsistatic.com/img/HLLu44FPHv-LnJ0dxJDvbsy-Bh8=/868x488/2019/09/24/21e34422-2496-4472-bb63-12381d85455f/00000img-00000-burst20190624080825073-cover.jpg'
    }
  ];
  contador = 0;
  constructor() {
    console.log('1.constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2.onchanges');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('3.oninit');
  }
  addCarrosVendidos(): void{
    this.contador++;
  }

}
