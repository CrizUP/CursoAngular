import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
    nombreAuto: string;
    listaAutos: string[];
    constructor() {
        this.nombreAuto = '';
        this.listaAutos = ['Altima', 'Sentra', 'lknjbv']
    }
}
