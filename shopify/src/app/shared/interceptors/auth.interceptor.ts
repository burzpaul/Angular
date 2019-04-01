import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '@auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    // tslint:disable-next-line: no-any
    req: HttpRequest<any>,
    next: HttpHandler
    // tslint:disable-next-line: no-any
  ): Observable<HttpEvent<any>> {
    const copiedReq = req.clone({
      params: req.params.set('auth', this.authService.getToken()),
    });
    return next.handle(copiedReq);
  }
}
