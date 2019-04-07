import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as firebase from 'firebase';

import * as fromApp from '@app/store/app.reducers';
import * as AuthActions from '@auth/store/auth.actions';

@Injectable()
export class AuthService {
  constructor(private router: Router, private store: Store<fromApp.AppState>) {}

  signupUser(email: string, password: string) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.SignUp());
        this.setToken();
      })
      .catch(error => console.error(error));
  }

  signinUser(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.store.dispatch(new AuthActions.SignIn());
        this.router.navigate(['/']);
        this.setToken();
      })
      .catch(error => console.error(error));
  }

  logout() {
    this.store.dispatch(new AuthActions.LogOut());
    firebase.auth().signOut();
  }

  private setToken() {
    firebase
      .auth()
      .currentUser.getIdToken()
      .then((token: string) =>
        this.store.dispatch(new AuthActions.SetToken(token))
      );
  }
}
