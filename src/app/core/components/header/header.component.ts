import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

//#region State
import { AppState } from '@app/store/app.state';
import { Auth } from '@auth/store/auth.state';
//#endregion

//#region Actions
import * as AuthActions from '@auth/store/auth.actions';
import * as RecipeActions from '@recipes/store/recipe.actions';
//#endregion


//#region Selectors
import { selectAuth } from '@app/store/app.selectors';
//#endregion

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  authState: Observable<Auth>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.authState = this.store.select(selectAuth);
  }

  onSaveData(): void {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData(): void {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout(): void {
    this.store.dispatch(new AuthActions.LogOut());
  }
}
