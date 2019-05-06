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

//#region State
import { AppState } from '@app/store/app.state';
import { Auth } from '@auth/store/auth.state'
//#endregion

//#region Selectors
import { selectAuth } from '@app/store/app.selectors';
//#endregion

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    // tslint:disable-next-line: no-any
    req: HttpRequest<any>,
    next: HttpHandler
    // tslint:disable-next-line: no-any
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectAuth).pipe(
      take(1),
      switchMap((authState: Auth) => {
        const copiedReq = req.clone({
          params: req.params.set('auth', authState.token),
        });
        return next.handle(copiedReq);
      })
    );
  }
}
