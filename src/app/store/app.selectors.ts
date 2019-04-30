import { AppState } from '@app/store/app.state';

export const selectShoppingList = (state: AppState) => state.shoppingList;
