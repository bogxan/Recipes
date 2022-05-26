import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailRecipeComponent} from "./recipes/detail-recipe/detail-recipe.component";
import {RecipesComponent} from "./recipes/recipes.component";

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent
  },
  {
    path: 'details/:id',
    component: DetailRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
