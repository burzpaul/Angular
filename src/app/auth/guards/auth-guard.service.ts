import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';

import { AuthModule } from '@auth/auth.module';

//#region State
import { AppState } from '@app/store/app.state';
//#endregion

//#region Selectors
import { selectIsAuthenticated } from '@auth/store/auth.selectors';
//#endregion

@Injectable({
  providedIn: AuthModule
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectIsAuthenticated).pipe(take(1));
  }
}
