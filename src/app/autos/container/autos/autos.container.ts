import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { AutoResponseModel } from '@core/models/auto-response.model';
import { Auto } from '@core/models/auto.model';
import { AutoService } from '@core/services/auto.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.container.html',
  styleUrls: ['./autos.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class AutosContainer implements OnInit {
  autosModel: AutoResponseModel[] = [];

  contador = 0;
  constructor(
    private autosService: AutoService,
    private notifyServices: NotifyService
  ) { }

  ngOnInit(): void {
    this.autosService.getAllAutos().subscribe(x => {
      this.autosModel = x;
    });
  }
  addCarrosVendidos(): void {
    this.contador++;
  }

}
