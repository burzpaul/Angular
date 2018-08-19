import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
