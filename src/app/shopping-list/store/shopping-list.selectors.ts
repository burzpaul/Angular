import { MemoizedSelector, createSelector } from '@ngrx/store';

import { selectShoppingList } from '@app/store/app.selectors';
import { ShoppingListState } from '@shoppList/store/shopping-list.state';
import { Ingredient } from '@app/shared/models/ingredient.model';

export const selectIngredients: MemoizedSelector<object, Ingredient[]> = createSelector(
  selectShoppingList,
  (state: ShoppingListState) => state.ingredients
);