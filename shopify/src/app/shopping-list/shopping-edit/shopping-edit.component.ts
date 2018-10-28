import { Component, ElementRef, ViewChild } from '@angular/core';

import { Ingredient } from './../../shared/models/ingredient.model';

import { ShoppingListService } from './../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput')
  public nameInputRef: ElementRef;
  @ViewChild('amountInput')
  public amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  public onAddItem() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
