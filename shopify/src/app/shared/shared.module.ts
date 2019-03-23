import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//#region Directives
import { DropdownDirective } from './directives/dropdown.directive';
//#endregion

@NgModule({
  declarations: [DropdownDirective],
  exports: [CommonModule, DropdownDirective],
})
export class SharedModule {}
