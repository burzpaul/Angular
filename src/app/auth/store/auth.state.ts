export interface Auth {
  token: string;
  authenticated: boolean;
}

export interface AuthState {
  readonly auth: Auth;
}

export const authInitialState: Auth = {
  token: null,
  authenticated: false
};
