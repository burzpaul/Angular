import { EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/models/ingredient.model';

export class ShoppingListService {
  private ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Potatos', 4),
    new Ingredient('Cucumber', 3),
    new Ingredient('Eggs', 12),
  ];

  getIngredientsChanged(): EventEmitter<Ingredient[]> {
    return this.ingredientsChanged;
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
