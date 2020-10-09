import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AutoResponseModel } from '@core/models/auto-response.model';
import { AutoService } from '@core/services/auto.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-autos-admin-container',
  templateUrl: './autos-admin.container.html',
  styleUrls: ['./autos-admin.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class AutosAdminContainer implements OnInit {

  autosModel: AutoResponseModel[] = [];
  isLoadPanelVisible = false;

  constructor(
    private router: Router,
    private autosService: AutoService,
    private notifyServices: NotifyService
  ) { }

  ngOnInit(): void {
    this.isLoadPanelVisible = true;
    this.autosService.getAllAutos().subscribe(x => {
      this.autosModel = x;
      this.isLoadPanelVisible = false;
    },
      error => {
        this.isLoadPanelVisible = false;
      });
  }

  openEdit(auto: AutoResponseModel): void {
    this.router.navigate(['/admin/autos/admin/editar/' + auto.autoId]);
  }

  deleteAuto(auto: AutoResponseModel): void {
    this.autosService.deleteAutoByID(auto.autoId).subscribe(e => {
      this.notifyServices.mostrarNotificacion('success', 'El auto ha sido eliminado');
      const index = this.autosModel.findIndex(d => d.autoId === auto.autoId); // find index in your array
      this.autosModel.splice(index, 1);
    });
  }

}
