import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth/guards/auth-guard.service';
import { HomeComponent } from '@core/home/home.component';
import { ShoppingListComponent } from '@shoppList/shopping-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
