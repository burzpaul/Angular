import { MemoizedSelector, createSelector } from '@ngrx/store';

import { selectAuth } from '@app/store/app.selectors';
import { AppState } from '@app/store/app.state';
import { Auth, AuthState } from '@auth/store/auth.state';

export const selectToken: MemoizedSelector<AuthState, string> = createSelector(
  selectAuth,
  (state: Auth) => state.token
);

export const selectIsAuthenticated: MemoizedSelector<AppState, boolean> = createSelector(
  selectAuth,
  (state: Auth) => state.authenticated
);
