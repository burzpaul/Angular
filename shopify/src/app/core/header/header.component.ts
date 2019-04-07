import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthService } from '@auth/services/auth.service';
import { DataStorageService } from '@shared/services/data.storage.service';

import * as fromAuth from '@auth/store/auth.reducers';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.authState = this.store.select('auth');
  }

  onSaveData(): void {
    this.dataStorageService.storeRecipe().subscribe(response => {
      console.warn(response);
    });
  }

  onFetchData(): void {
    this.dataStorageService.getRecipes();
  }

  onLogout(): void {
    this.authService.logout();
  }
}
