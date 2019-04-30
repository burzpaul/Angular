import { MemoizedSelector, createFeatureSelector, createSelector } from '@ngrx/store';

import { ShoppingListState } from '@shoppList/store/shopping-list.state';
import { Ingredient } from '@app/shared/models/ingredient.model';

const selectShoppingListState: MemoizedSelector<object, ShoppingListState> = createFeatureSelector<ShoppingListState>(
  'shoppingList'
);

const selectIngredient: MemoizedSelector<object, Ingredient[]> = createSelector(
  selectShoppingListState,
  (state: ShoppingListState) => state.ingredients
);

export const shoppingListQuery = {
  selectShoppingListState,
  selectIngredient
};
