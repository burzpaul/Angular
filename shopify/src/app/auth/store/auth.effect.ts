import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

import * as AuthActions from '@auth/store/auth.actions';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignUp = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNUP),
    map((action: AuthActions.TrySignUp) => action.payload),
    switchMap((authData: { userName: string; password: string }) =>
      from(firebase.auth().createUserWithEmailAndPassword(authData.userName, authData.password))
    ),
    switchMap(() => from(firebase.auth().currentUser.getIdToken())),
    mergeMap((token: string) => [{ type: AuthActions.SIGNUP }, { type: AuthActions.SET_TOKEN, payload: token }])
  );

  @Effect()
  authSignIn = this.actions$.pipe(
    ofType(AuthActions.TRY_SIGNIN),
    map((action: AuthActions.TrySignUp) => action.payload),
    switchMap((authData: { userName: string; password: string }) =>
      from(firebase.auth().signInWithEmailAndPassword(authData.userName, authData.password))
    ),
    switchMap(() => from(firebase.auth().currentUser.getIdToken())),
    mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [{ type: AuthActions.SIGNIN }, { type: AuthActions.SET_TOKEN, payload: token }];
    })
  );

  @Effect({ dispatch: false })
  authLogOut = this.actions$.pipe(
    ofType(AuthActions.LOGOUT),
    tap(() => this.router.navigate(['/']))
  );

  constructor(private actions$: Actions, private router: Router) {}
}
