import { Recipe } from '../models/recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 2', 'Recipe 2 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 3', 'Recipe 3 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 4', 'Recipe 4 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 5', 'Recipe 5 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 6', 'Recipe 6 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 7', 'Recipe 7 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 8', 'Recipe 8 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 9', 'Recipe 9 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
