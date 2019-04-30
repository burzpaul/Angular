import { Action } from '@ngrx/store';

export const TRY_SIGNUP = '[AUTH] TRY_SIGNUP';
export const SIGNUP = '[AUTH] SIGNUP';
export const TRY_SIGNIN = '[AUTH] TRY_SIGNIN';
export const SIGNIN = '[AUTH] SIGNIN';
export const LOGOUT = '[AUTH] LOGOUT';
export const SET_TOKEN = '[AUTH] SET_TOKEN';

export class TrySignUp implements Action {
  readonly type = TRY_SIGNUP;

  constructor(public payload: { userName: string; password: string }) {}
}

export class SignUp implements Action {
  readonly type = SIGNUP;
}

export class TrySignIn implements Action {
  readonly type = TRY_SIGNIN;

  constructor(public payload: { userName: string; password: string }) {}
}

export class SignIn implements Action {
  readonly type = SIGNIN;
}

export class LogOut implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions = TrySignUp | SignUp | SignIn | TrySignIn | LogOut | SetToken;
