import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserService } from './user.service';
import { catchError } from 'rxjs/operators';
import { NotifyService } from './notify.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private notifyService: NotifyService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = this.addToken(request);
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage: string = error.error.ResponseMessage;
        this.notifyService.mostrarNotificacion('danger', errorMessage);
        return throwError(error);
      })
    );
  }



  private addToken(req: HttpRequest<any>): HttpRequest<any> {

    const token = this.userService.getToken();
    if (token && token !== '') {
      req = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      });
    }
    return req;
  }
}
