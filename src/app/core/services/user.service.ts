import { Injectable } from '@angular/core';
import { Login } from '@core/models/login.model';
import { IResponseOfLoginResponse } from '@core/models/ireposnse-of-login-response.model';
import { HttpClient } from '@angular/common/http';
import { catchError, flatMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments';
import { StorageService } from './storage.service';
import { LoginResponse } from '@core/models/login-response.model';
import { LoginInputModel } from '@core/models/login-input-model.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  iniciarSesion(loginModel: LoginInputModel): Observable<IResponseOfLoginResponse> {

    return this.http.post<IResponseOfLoginResponse>(`${environment.UrlApi}Auth/IniciarSesion`, loginModel);

  }

  cerrarSesion(): void {
    this.storage.removeJsonItem('User');
  }

  isAuthenticated(): boolean {

    const user = this.storage.getJsonValue('User');
    if (user) {
      return true;
    }
    return false;

  }

  guardarUsuario(loginResponse: LoginResponse): void {
    this.storage.setJsonValue('User', loginResponse);
  }

  getUser(): LoginResponse {

    const data: LoginResponse = this.storage.getJsonValue('User');
    return data;

  }

  getToken(): string {

    const data: LoginResponse = this.storage.getJsonValue('User');
    if (data) {
      return data.token;
    }
    return '';

  }

}
