import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '@app/store/app.state';
import { shoppingListReducer } from '@shoppList/store/shopping-list.reducers';
import { authReducer } from '@auth/store/auth.reducers';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  shoppingList: shoppingListReducer
};
