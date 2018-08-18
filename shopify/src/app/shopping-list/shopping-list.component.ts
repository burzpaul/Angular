import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Potatos', 4),
    new Ingredient('Cucumber', 3),
    new Ingredient('Eggs', 12),
  ];

  constructor() { }

  ngOnInit() {
  }

}
