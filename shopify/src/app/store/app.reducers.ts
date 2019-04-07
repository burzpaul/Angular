import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '@auth/store/auth.reducers';
import * as fromShoppingList from '@shoppList/store/shopping-list.reducers';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  shoppingList: fromShoppingList.shoppingListReducer,
};
