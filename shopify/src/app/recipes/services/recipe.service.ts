import { Injectable } from '@angular/core';

import { Ingredient } from '../../shared/models/ingredient.model';
import { Recipe } from '../models/recipe.model';

import { Subject } from 'rxjs';
import { ShoppingListService } from './../../shopping-list/services/shopping-list.service';

@Injectable()
export class RecipeService {
  public recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'Recipe 1 description',
      'http://pluspng.com/img-png/burger-png-burger-free-download-png-png-image-2126.png',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 21)]
    ),
    new Recipe(
      'Recipe 2',
      'Recipe 2 description',
      'http://pluspng.com/img-png/burger-png-burger-png-picture-png-image-2008.png',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    )
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  public getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  public getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  public addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  public updateRecipe(index: number, newRecipe: Recipe): void {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  public deleteRecipe(index: number): void {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  public addIngredientToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
