import { ShoppingListState } from '@app/shopping-list/store/shopping-list.state';
import * as fromAuth from '@auth/store/auth.reducers';

export interface AppState {
  shoppingList: ShoppingListState;
  auth: fromAuth.State;
}
