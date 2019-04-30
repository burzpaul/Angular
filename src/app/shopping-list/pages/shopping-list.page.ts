import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ingredient } from '@shared/models/ingredient.model';

import { AppState } from '@app/store/app.state';
import * as ShoppingListActions from '@shoppList/store/shopping-list.actions';
import { shoppingListQuery } from '../store/shopping-list.selectors';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss']
})
export class ShoppingListPageComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.ingredients$ = this.store.select(shoppingListQuery.selectIngredient);
  }
  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
