import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ingredient } from '@shared/models/ingredient.model';

//#region State
import { AppState } from '@app/store/app.state';
//#endregion

//#region Actions
import { StartEdit } from '@shoppList/store/shopping-list.actions';
//#endregion

//#region Selectors
import { selectIngredients } from '@shoppList/store/shopping-list.selectors';
//#endregion

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss']
})
export class ShoppingListPageComponent implements OnInit {
  ingredients$: Observable<Ingredient[]>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.ingredients$ = this.store.select(selectIngredients);
  }
  onEditItem(index: number) {
    this.store.dispatch(new StartEdit(index));
  }
}
