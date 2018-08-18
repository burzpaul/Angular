import { Component, OnInit } from '@angular/core';

import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('Recipe 1', 'Recipe 1 description', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
