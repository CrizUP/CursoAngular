import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MarcaRequestEditModel } from '@core/models/marca-request-edit.model';
import { MarcaResponseEditModel } from '@core/models/marca-response-edit.model';
import { MarcaService } from '@core/services/marca.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-editar-marca-container',
  templateUrl: './editar-marca.container.html',
  styleUrls: ['./editar-marca.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class EditarMarcaContainer implements OnInit {

  marcaModel: MarcaRequestEditModel = {
    idmarca: '',
    nombre: ''
  };

  constructor(
    private route: ActivatedRoute,
    private marcaService: MarcaService,
    private notifyservice: NotifyService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.marcaModel.idmarca = params.id;
    });
    this.marcaService.getMarcaByID(this.marcaModel.idmarca).subscribe(x => {
      this.marcaModel.nombre = x.nombre;
    });
  }

  editarMarca(): void {
    this.marcaService.editarMarca(this.marcaModel).subscribe(() => {
      this.notifyservice.mostrarNotificacion('success', 'El registro se ha modificado con éxito');
    });
  }

}
