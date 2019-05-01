import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

//#region Models
import { Ingredient } from '@shared/models/ingredient.model';
//#endregion

//#region State
import { AppState } from '@app/store/app.state';
//#endregion

//#region Actions
import {
  UpdateIngredient,
  AddIngredient,
  DeleteIngredient,
  StopEdit
} from '@app/shopping-list/store/shopping-list.actions';
//#endregion

//#region Selectors
import { selectShoppingList } from '@app/store/app.selectors';
//#endregion

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  editMode = false;

  private subscription: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.subscription = this.store.select(selectShoppingList).subscribe((data) => {
      if (data.editedIngredientIndex > -1) {
        this.editMode = true;

        this.shoppingListForm.setValue({
          name: data.editedIngredient.name,
          amount: data.editedIngredient.amount
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
      this.store.dispatch(new UpdateIngredient(newIngredient));
    } else {
      this.store.dispatch(new AddIngredient(newIngredient));
    }
    this.resetForm();
  }

  onClear(): void {
    this.resetForm();
  }

  onDelete(): void {
    this.resetForm();
    this.store.dispatch(new DeleteIngredient());
  }

  ngOnDestroy(): void {
    this.store.dispatch(new StopEdit());
    this.subscription.unsubscribe();
  }

  private resetForm(): void {
    this.shoppingListForm.reset();
    this.editMode = false;
  }
}
