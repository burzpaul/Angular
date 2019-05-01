import { MemoizedSelector, createSelector } from '@ngrx/store';

import { selectAuth } from '@app/store/app.selectors';
import { AuthState } from '@auth/store/auth.state';

export const selectToken: MemoizedSelector<object, string> = createSelector(
  selectAuth,
  (state: AuthState) => state.token
);

export const selectIsAuthenticated: MemoizedSelector<object, boolean> = createSelector(
    selectAuth,
    (state: AuthState) => state.authenticated
  );
  