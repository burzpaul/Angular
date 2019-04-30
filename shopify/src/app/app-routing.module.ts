import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '@auth/guards/auth-guard.service';
import { HomePageComponent } from '@app/core/pages/home/home.page';
import { ShoppingListPageComponent } from '@app/shopping-list/pages/shopping-list.page';

const appRoutes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'recipes',
    loadChildren: './recipes/recipes.module#RecipesModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'shopping-list',
    component: ShoppingListPageComponent,
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
