import { Ingredient } from '@shared/models/ingredient.model';
import { ShoppingListActions, ShoppingListActionTypes } from '@shoppList/store/shopping-list.actions';
import { ShoppingListState, initialState } from '@shoppList/store/shopping-list.state';

export function shoppingListReducer(state = initialState, action: ShoppingListActions): ShoppingListState {
  switch (action.type) {
    case ShoppingListActionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...(action.payload as Ingredient[])]
      };
    case ShoppingListActionTypes.UPDATE_INGREDIENT:
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = action.payload;
      return {
        ...state,
        ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActionTypes.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActionTypes.START_EDIT:
      const editedIngredient = { ...state.ingredients[action.payload] };
      return {
        ...state,
        editedIngredient,
        editedIngredientIndex: action.payload
      };
    case ShoppingListActionTypes.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
