import * as fromAuth from '@auth/store/auth.reducer';
import * as fromShoppingList from '@shoppList/store/shopping-list.reducers';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
}
