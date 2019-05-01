import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import { AuthModule } from '@auth/auth.module';

import { AppState } from '@app/store/app.state';
import * as fromAuth from '@auth/store/auth.reducers';

@Injectable({
  providedIn: AuthModule
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select('auth').pipe(
      take(1),
      tap(console.log),
      map((authState: fromAuth.State) => authState.authenticated)
    );
  }
}
