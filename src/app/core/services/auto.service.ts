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

  registrarAuto(autoModel: AutoRequestModel): Observable<AutoResponseModel> {
    return this.http.post<AutoResponseModel>(`${environment.UrlApi}Auto`, autoModel);
  }
  getAllAutos(): Observable<AutoResponseModel[]> {
    return this.http.get<AutoResponseModel[]>(`${environment.UrlApi}Auto`);
  }
  getAutoByID(idAuto: string): Observable<AutoResponseModel> {
    return this.http.get<AutoResponseModel>(`${environment.UrlApi}Auto/${idAuto}`);
  }
  editarAuto(autoModel: AutoResponseModel): Observable<any> {
    return this.http.patch(`${environment.UrlApi}Auto`, autoModel);
  }
  deleteAutoByID(idAuto: string): Observable<any> {
    return this.http.delete(`${environment.UrlApi}Auto/${idAuto}`);
  }
}
