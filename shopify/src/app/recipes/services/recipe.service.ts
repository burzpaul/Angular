import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe.model';
import { Ingredient } from '../../shared/models/ingredient.model';

import { ShoppingListService } from './../../shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Recipe 1 description',
      'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 21)]
    ),
    new Recipe(
      'Recipe 2',
      'Recipe 2 description',
      'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
