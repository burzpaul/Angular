import { Action } from '@ngrx/store';

export enum AuthActionsTypes {
  TrySignUp = '[AUTH] TrySignUp',
  SignUp = '[AUTH] SignUp',
  TrySignIn = '[AUTH] TrySignIn',
  SignIn = '[AUTH] SignIn',
  LogOut = '[AUTH] LogOut',
  SetToken = '[AUTH] SetToken'
}

export class TrySignUp implements Action {
  readonly type = AuthActionsTypes.TrySignUp;

  constructor(public payload: { userName: string; password: string }) {}
}

export class SignUp implements Action {
  readonly type = AuthActionsTypes.SignUp;
}

export class TrySignIn implements Action {
  readonly type = AuthActionsTypes.TrySignIn;

  constructor(public payload: { userName: string; password: string }) {}
}

export class SignIn implements Action {
  readonly type = AuthActionsTypes.SignIn;
}

export class LogOut implements Action {
  readonly type = AuthActionsTypes.LogOut;
}

export class SetToken implements Action {
  readonly type = AuthActionsTypes.SetToken;

  constructor(public payload: string) {}
}

export type AuthActions = TrySignUp | SignUp | SignIn | TrySignIn | LogOut | SetToken;
