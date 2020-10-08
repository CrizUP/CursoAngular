import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AutoResponseModel } from '@core/models/auto-response.model';
import { MarcaModel } from '@core/models/marca.model';
import { AutoService } from '@core/services/auto.service';
import { MarcaService } from '@core/services/marca.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-editar-auto-container',
  templateUrl: './editar-auto.container.html',
  styleUrls: ['./editar-auto.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class EditarAutoContainer implements OnInit {

  autoModel: AutoResponseModel = {
    fechaEsamble: new Date(),
    marcaId: '',
    nombre: '',
    numeroMotor: '',
    precioMercado: 0.0,
    autoId: ''
  };
  marcasModel: MarcaModel[] = [];

  constructor(
    private route: ActivatedRoute,
    private notifiService: NotifyService,
    private autosService: AutoService,
    private marcasService: MarcaService
  ) { }


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.autoModel.autoId = params.id;
      this.marcasService.getAllMarcas().subscribe(response => {
        this.marcasModel = response;
        // tslint:disable-next-line: no-shadowed-variable
        this.autosService.getAutoByID(this.autoModel.autoId).subscribe(response => {
          this.autoModel.fechaEsamble = response.fechaEsamble;
          this.autoModel.marcaId = response.marcaId;
          this.autoModel.nombre = response.nombre;
          this.autoModel.numeroMotor = response.numeroMotor;
          this.autoModel.precioMercado = response.precioMercado;
        });
      });
    });
  }
  editarAuto(): void {
    this.autosService.editarAuto(this.autoModel).subscribe(() => {
      this.notifiService.mostrarNotificacion('success', `Se ha editado con éxito el auto`);
    });
  }
}
