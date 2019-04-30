import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '@app/store/app.reducers';
import * as AuthActions from '@auth/store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss']
})
export class SigninPageComponent {
  constructor(private store: Store<fromApp.AppState>) {}

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignIn({ userName: email, password }));
  }
}
