import { Subject } from 'rxjs';

import { Ingredient } from '../../shared/models/ingredient.model';

export class ShoppingListService {
  public ingredientsChanged = new Subject<Ingredient[]>();
  public startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Potatos', 4),
    new Ingredient('Cucumber', 3),
    new Ingredient('Eggs', 12)
  ];

  public getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  public addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public updateIngredient(index: number, newIngredient: Ingredient): void {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  public deleteItem(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
