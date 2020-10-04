import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AutoRequestModel } from '@core/models/auto-request.model';
import { AutoResponseModel } from '@core/models/auto-response.model';
import { environment } from '@environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(
    private http: HttpClient
  ) { }

  registrarMarca(autoModel: AutoRequestModel): Observable<AutoResponseModel> {
    return this.http.post<AutoResponseModel>(`${environment.UrlApi}auto`, autoModel);
  }
  // getAllMarcas(): Observable<MarcaModel[]> {
  //   return this.http.get<MarcaModel[]>(`${environment.UrlApi}Marca`);
  // }
  // getMarcaByID(idmarca: string): Observable<MarcaResponseEditModel> {
  //   return this.http.get<MarcaResponseEditModel>(`${environment.UrlApi}Marca/${idmarca}`);
  // }
  // editarMarca(marcaModel: MarcaRequestEditModel): Observable<any> {
  //   return this.http.patch(`${environment.UrlApi}Marca`, marcaModel);
  // }
  // deleteMarcaByID(idmarca: string): Observable<any> {
  //   return this.http.delete(`${environment.UrlApi}Marca/${idmarca}`);
  // }
}
