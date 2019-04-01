import { Component } from '@angular/core';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { AuthService } from '@auth/auth.service';
import { DataStorageService } from '@shared/services/data.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService
  ) {}

  onSaveData() {
    this.dataStorageService.storeRecipe().subscribe(response => {
      console.warn(response);
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
