import { Ingredient } from '@app/shared/models/ingredient.model';

export interface ShoppingListState {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

export const initialState: ShoppingListState = {
  ingredients: [],
  editedIngredient: null,
  editedIngredientIndex: -1
};
