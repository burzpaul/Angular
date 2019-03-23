import { Component } from '@angular/core';

import { DataStorageService } from './../../shared/services/data.storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataStorageSvc: DataStorageService) {}

  onSaveData(): void {
    this.dataStorageSvc.storeRecipe().subscribe();
  }

  onFetchData(): void {
    this.dataStorageSvc.getRecipes();
  }
}
