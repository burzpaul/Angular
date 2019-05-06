import { Auth } from '@auth/store/auth.state';
import { ShoppingList } from '@app/shopping-list/store/shopping-list.state';

export interface AppState {
    readonly auth: Auth;
    readonly shoppingList: ShoppingList;
}
