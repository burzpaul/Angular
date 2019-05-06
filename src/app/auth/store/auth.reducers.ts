import { AuthActions, AuthActionsTypes } from '@auth/store/auth.actions';
import { Auth, authInitialState } from '@auth/store/auth.state';

export function authReducer(state = authInitialState, action: AuthActions): Auth {
  switch (action.type) {
    case AuthActionsTypes.SignUp:
    case AuthActionsTypes.SignIn:
      return {
        ...state,
        authenticated: true
      };
    case AuthActionsTypes.SetToken:
      return { ...state, token: action.payload };
    case AuthActionsTypes.LogOut:
      return {
        ...state,
        token: null,
        authenticated: false
      };
    default:
      return state;
  }
}
