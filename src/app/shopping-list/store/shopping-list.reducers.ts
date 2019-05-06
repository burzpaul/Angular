import { Ingredient } from '@shared/models/ingredient.model';

import { ShoppingListActions, ShoppingListActionTypes } from '@shoppList/store/shopping-list.actions';
import { ShoppingList, shoppListInitialState } from '@shoppList/store/shopping-list.state';

export function shoppingListReducer(state = shoppListInitialState, action: ShoppingListActions): ShoppingList {
  switch (action.type) {
    case ShoppingListActionTypes.AddIngredient:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActionTypes.AddIngredients:
      return {
        ...state,
        ingredients: [...state.ingredients, ...(action.payload as Ingredient[])]
      };
    case ShoppingListActionTypes.UpdateIngredient:
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = action.payload;
      return {
        ...state,
        ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActionTypes.DeleteIngredient:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActionTypes.StartEdit:
      const editedIngredient = { ...state.ingredients[action.payload] };
      return {
        ...state,
        editedIngredient,
        editedIngredientIndex: action.payload
      };
    case ShoppingListActionTypes.StopEdit:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
