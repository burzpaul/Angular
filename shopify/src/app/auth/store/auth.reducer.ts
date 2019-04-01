export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: true,
};

export function authReducer(state = initialState, _action) {
  return state;
}
