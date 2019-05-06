import { MemoizedSelector, createSelector } from '@ngrx/store';

import { AppState } from '@app/store/app.state';
import { selectShoppingList } from '@app/store/app.selectors';

import { ShoppingList } from '@shoppList/store/shopping-list.state';
import { Ingredient } from '@app/shared/models/ingredient.model';

export const selectIngredients: MemoizedSelector<AppState, Ingredient[]> = createSelector(
  selectShoppingList,
  (state: ShoppingList) => state.ingredients
);