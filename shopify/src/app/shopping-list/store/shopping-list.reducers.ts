import { Ingredient } from '@shared/models/ingredient.model';
import * as ShoppingListActions from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 10),
    new Ingredient('Potatos', 4),
    new Ingredient('Cucumber', 3),
    new Ingredient('Eggs', 12),
  ],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions.ShoppingListActions
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...(action.payload as Ingredient[]),
        ],
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredients = [...state.ingredients];
      ingredients[state.editedIngredientIndex] = action.payload;
      return {
        ...state,
        ingredients,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      const oldIngredients = [...state.ingredients];
      oldIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: oldIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    case ShoppingListActions.START_EDIT:
      const editedIngredient = { ...state.ingredients[action.payload] };
      return {
        ...state,
        editedIngredient,
        editedIngredientIndex: action.payload,
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    default:
      return state;
  }
}
