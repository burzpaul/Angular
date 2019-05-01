import { AuthState } from '@auth/store/auth.state';
import { ShoppingListState } from '@app/shopping-list/store/shopping-list.state';
export interface AppState {
  readonly shoppingList: ShoppingListState;
  readonly auth: AuthState;
}
