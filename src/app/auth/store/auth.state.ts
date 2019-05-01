export interface AuthState {
  token: string;
  authenticated: boolean;
}

export const initialState: AuthState = {
  token: null,
  authenticated: false
};
