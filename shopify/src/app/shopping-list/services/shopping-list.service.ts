import { Subject } from 'rxjs';

import { Ingredient } from '../../shared/models/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Potatos', 4),
    new Ingredient('Cucumber', 3),
    new Ingredient('Eggs', 12)
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
