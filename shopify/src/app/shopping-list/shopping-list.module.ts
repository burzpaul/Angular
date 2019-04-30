import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListPageComponent } from './pages/shopping-list.page';
@NgModule({
  declarations: [ShoppingListPageComponent, ShoppingEditComponent],
  imports: [CommonModule, FormsModule]
})
export class ShoppingListModule {}
