import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarcaRequestModel } from '@core/models/marca-request.model';
import { MarcaModel } from '@core/models/marca.model';
import { MarcaResponseModel } from '@core/models/marca-response.model';
import { environment } from '@environments';
import { Observable } from 'rxjs';
import { MarcaRequestEditModel } from '@core/models/marca-request-edit.model';
import { MarcaResponseEditModel } from '@core/models/marca-response-edit.model';
@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    private http: HttpClient
  ) { }

  registrarMarca(marcaModel: MarcaRequestModel): Observable<MarcaResponseModel> {
    return this.http.post<MarcaResponseModel>(`${environment.UrlApi}Marca`, marcaModel);
  }
  getAllMarcas(): Observable<MarcaModel[]> {
    return this.http.get<MarcaModel[]>(`${environment.UrlApi}Marca`);
  }
  getMarcaByID(idmarca: string): Observable<MarcaResponseEditModel> {
    return this.http.get<MarcaResponseEditModel>(`${environment.UrlApi}Marca/${idmarca}`);
  }
  editarMarca(marcaModel: MarcaRequestEditModel): Observable<any> {
    return this.http.patch(`${environment.UrlApi}Marca`, marcaModel);
  }
  deleteMarcaByID(idmarca: string): Observable<any> {
    return this.http.delete(`${environment.UrlApi}Marca/${idmarca}`);
  }
}
