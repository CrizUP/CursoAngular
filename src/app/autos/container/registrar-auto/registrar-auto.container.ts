import { Component, OnInit } from '@angular/core';
import { AutoRequestModel } from '@core/models/auto-request.model';
import { MarcaModel } from '@core/models/marca.model';
import { AutoService } from '@core/services/auto.service';
import { MarcaService } from '@core/services/marca.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-registrar-auto-container',
  templateUrl: './registrar-auto.container.html',
  styleUrls: ['./registrar-auto.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class RegistrarAutoContainer implements OnInit {

  autoModel: AutoRequestModel = {
    fechaEsamble: new Date(),
    marcaId: '',
    nombre: '',
    numeroMotor: '',
    precioMercado: 0.0
  };
  marcasModel: MarcaModel[] = [];
  constructor(
    private notifiService: NotifyService,
    private autosService: AutoService,
    private marcasService: MarcaService
  ) { }

  ngOnInit(): void {
    this.marcasService.getAllMarcas().subscribe(response => {
      this.marcasModel = response;
    });
  }

  agregarAuto(): void {
    this.autosService.registrarAuto(this.autoModel).subscribe(() => {
      this.notifiService.mostrarNotificacion('success', `Se ha registrado con éxito el auto '${this.autoModel.nombre}'`);
      this.autoModel.fechaEsamble = new Date();
      this.autoModel.marcaId = '';
      this.autoModel.nombre = '';
      this.autoModel.numeroMotor = '';
      this.autoModel.precioMercado = 0.0;
    });
  }


}
