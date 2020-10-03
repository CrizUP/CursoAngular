import { Component, OnInit } from '@angular/core';
import { MarcaRequestModel } from '@core/models/marca-request.model';
import { MarcaService } from '@core/services/marca.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-registrar-marca-container',
  templateUrl: './registrar-marca.container.html',
  styleUrls: ['./registrar-marca.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class RegistrarMarcaContainer implements OnInit {

  marcaModel: MarcaRequestModel = {
    nombre: ''
  };

  constructor(
    private marcaService: MarcaService,
    private notify: NotifyService
  ) { }

  ngOnInit(): void {
  }

  registrarMarca(): void {
    this.marcaService.registrarMarca(this.marcaModel).subscribe(response => {
      this.notify.mostrarNotificacion('success', `La marca ${response.nombre} ha sido registrado con éxito.`, 'new_releases');
      this.marcaModel.nombre = '';
    });
  }

}
