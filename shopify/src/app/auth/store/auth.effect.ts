import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import * as AuthActions from '@auth/store/auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignUp = this.actions$.pipe(ofType(AuthActions.TRY_SIGNUP));

  constructor(private actions$: Actions) {}
}
