import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ingredient } from '@shared/models/ingredient.model';

import * as fromApp from '@store/app.reducers';
import * as ShoppingListActions from '@shoppList/store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{
    ingredients: Ingredient[];
  }>;

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.shoppingListState = this.store.select('shoppingList');
  }
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
