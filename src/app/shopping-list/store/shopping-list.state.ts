import { Ingredient } from '@app/shared/models/ingredient.model';

export interface ShoppingList {
  readonly ingredients: Ingredient[];
  readonly editedIngredient: Ingredient;
  readonly editedIngredientIndex: number;
}

export interface ShoppingListState {
  readonly shoppingList: ShoppingList;
}

export const shoppListInitialState: ShoppingList = {
  ingredients: [],
  editedIngredient: null,
  editedIngredientIndex: -1
};
