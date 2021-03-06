import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

//#region State
import { AuthState } from '@app/auth/store/auth.state';
//#endregion

//#region Actions
import * as AuthActions from '@auth/store/auth.actions';
//#endregion

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss']
})
export class SigninPageComponent {
  constructor(private store: Store<AuthState>) {}

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignIn({ userName: email, password }));
  }
}
