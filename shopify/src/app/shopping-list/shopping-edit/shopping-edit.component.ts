import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from './../../shared/models/ingredient.model';

import { Subscription } from 'rxjs';
import { ShoppingListService } from './../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') public shoppingListForm: NgForm;
  public editMode = false;

  private editedNumberIndex: number;
  private editedItem: Ingredient;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  public ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedNumberIndex = index;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getIngredient(index);

      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  public onAddItem(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedNumberIndex, newIngredient);
    } else {
      this.shoppingListService.addIngredient(newIngredient);
    }
    this.resetForm();
  }

  public onClear(): void {
    this.resetForm();
  }

  public onDelete(): void {
    this.resetForm();
    this.shoppingListService.deleteItem(this.editedNumberIndex);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private resetForm(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
  }
}
