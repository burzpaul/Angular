import { Ingredient } from '@app/shared/models/ingredient.model';

export interface ShoppingListState {
  readonly ingredients: Ingredient[];
  readonly editedIngredient: Ingredient;
  readonly editedIngredientIndex: number;
}

export const initialState: ShoppingListState = {
  ingredients: [],
  editedIngredient: null,
  editedIngredientIndex: -1
};
