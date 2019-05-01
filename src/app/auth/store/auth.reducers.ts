import { AuthActions, AuthActionsTypes } from '@auth/store/auth.actions';
import { AuthState, initialState } from '@auth/store/auth.state';

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionsTypes.SIGNUP:
    case AuthActionsTypes.SIGNIN:
      return {
        ...state,
        authenticated: true
      };
    case AuthActionsTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case AuthActionsTypes.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      };
    default:
      return state;
  }
}
