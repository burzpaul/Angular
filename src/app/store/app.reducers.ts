import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '@app/store/app.state';
import * as fromAuth from '@auth/store/auth.reducers';
import { shoppingListReducer } from '@shoppList/store/shopping-list.reducers';

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  shoppingList: shoppingListReducer
};
