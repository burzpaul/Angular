import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

//#region Models
import { Ingredient } from '@shared/models/ingredient.model';
//#endregion

//#region Store
import * as ShoppingListActions from '@shoppList/store/shopping-list.actions';
import * as fromShoppingList from '@shoppList/store/shopping-list.reducers';
//#endregion

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  editMode = false;

  private subscription: Subscription;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select('shoppingList').subscribe(data => {
      if (data.editedIngredientIndex > -1) {
        this.editMode = true;

        this.shoppingListForm.setValue({
          name: data.editedIngredient.name,
          amount: data.editedIngredient.amount,
        });
      } else {
        this.editMode = false;
      }
    });
  }

  onAddItem(form: NgForm): void {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.store.dispatch(
        new ShoppingListActions.UpdateIngredient(newIngredient)
      );
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    }
    this.resetForm();
  }

  onClear(): void {
    this.resetForm();
  }

  onDelete(): void {
    this.resetForm();
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }

  private resetForm(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
  }
}
