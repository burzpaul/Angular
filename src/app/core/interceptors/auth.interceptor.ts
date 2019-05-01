import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

import { AppState } from '@app/store/app.state';
import * as fromAuth from '@auth/store/auth.reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    // tslint:disable-next-line: no-any
    req: HttpRequest<any>,
    next: HttpHandler
    // tslint:disable-next-line: no-any
  ): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      switchMap((authState: fromAuth.State) => {
        const copiedReq = req.clone({
          params: req.params.set('auth', authState.token),
        });
        return next.handle(copiedReq);
      })
    );
  }
}
