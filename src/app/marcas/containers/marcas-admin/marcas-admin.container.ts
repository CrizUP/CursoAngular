import { Component, OnInit } from '@angular/core';
import { MarcaService } from '@core/services/marca.service';
import { MarcaModel } from '@core/models/marca.model';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-marcas-admin',
  templateUrl: './marcas-admin.container.html',
  styleUrls: ['./marcas-admin.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class MarcasAdminContainer implements OnInit {
  isLoadPanelVisible = false;
  marcas: MarcaModel[];
  constructor(
    private marcaService: MarcaService,
    private notifyservice: NotifyService
  ) { }

  ngOnInit(): void {
    this.isLoadPanelVisible = true;
    this.marcaService.getAllMarcas().subscribe(x => {
      this.marcas = x;
      // setTimeout(() => {
      this.isLoadPanelVisible = false;
      // }, 2000);
    },
      error => {
        this.isLoadPanelVisible = false;
      });
  }

  deleteMarca(id: string): void {
    this.marcaService.deleteMarcaByID(id).subscribe((x) => {
      console.log(x);
      this.notifyservice.mostrarNotificacion('success', 'El registro se ha eliminado con éxito');
    });
  }

}
