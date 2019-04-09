import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

import { AuthModule } from '@auth/auth.module';

import * as fromApp from '@app/store/app.reducers';
import * as fromAuth from '@auth/store/auth.reducers';

@Injectable({
  providedIn: AuthModule,
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromApp.AppState>) {}

  canActivate(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(
      take(1),
      map((authState: fromAuth.State) => authState.authenticated)
    );
  }
}
