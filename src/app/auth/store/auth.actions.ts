import { Action } from '@ngrx/store';

export enum AuthActionsTypes {
  TRY_SIGNUP = '[AUTH] TRY_SIGNUP',
  SIGNUP = '[AUTH] SIGNUP',
  TRY_SIGNIN = '[AUTH] TRY_SIGNIN',
  SIGNIN = '[AUTH] SIGNIN',
  LOGOUT = '[AUTH] LOGOUT',
  SET_TOKEN = '[AUTH] SET_TOKEN'
}

export class TrySignUp implements Action {
  readonly type = AuthActionsTypes.TRY_SIGNUP;

  constructor(public payload: { userName: string; password: string }) {}
}

export class SignUp implements Action {
  readonly type = AuthActionsTypes.SIGNUP;
}

export class TrySignIn implements Action {
  readonly type = AuthActionsTypes.TRY_SIGNIN;

  constructor(public payload: { userName: string; password: string }) {}
}

export class SignIn implements Action {
  readonly type = AuthActionsTypes.SIGNIN;
}

export class LogOut implements Action {
  readonly type = AuthActionsTypes.LOGOUT;
}

export class SetToken implements Action {
  readonly type = AuthActionsTypes.SET_TOKEN;

  constructor(public payload: string) {}
}

export type AuthActions = TrySignUp | SignUp | SignIn | TrySignIn | LogOut | SetToken;
