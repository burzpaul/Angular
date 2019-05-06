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
  authSignUp$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionsTypes.TrySignUp),
    map((action: AuthActions.TrySignUp) => action.payload),
    switchMap((authData: { userName: string; password: string }) =>
      from(firebase.auth().createUserWithEmailAndPassword(authData.userName, authData.password))
    ),
    switchMap(() => from(firebase.auth().currentUser.getIdToken())),
    mergeMap((token: string) => [
      { type: AuthActions.AuthActionsTypes.SignUp },
      { type: AuthActions.AuthActionsTypes.SetToken, payload: token }
    ])
  );

  @Effect()
  authSignIn$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionsTypes.TrySignIn),
    map((action: AuthActions.TrySignIn) => action.payload),
    switchMap((authData: { userName: string; password: string }) =>
      from(firebase.auth().signInWithEmailAndPassword(authData.userName, authData.password))
    ),
    switchMap(() => from(firebase.auth().currentUser.getIdToken())),
    mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        { type: AuthActions.AuthActionsTypes.SignIn },
        { type: AuthActions.AuthActionsTypes.SetToken, payload: token }
      ];
    })
  );

  @Effect({ dispatch: false })
  authLogOut$ = this.actions$.pipe(
    ofType(AuthActions.AuthActionsTypes.LogOut),
    tap(() => this.router.navigate(['/']))
  );

  constructor(private actions$: Actions, private router: Router) {}
}
