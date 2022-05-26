import {RecipeComponent} from "./recipe/recipe.component";
import {RecipesComponent} from "./recipes.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared.module";
import {RouterModule} from "@angular/router";
import {RecipesService} from "./recipes.service";
import {NgModule} from "@angular/core";
import {DetailRecipeComponent} from "./detail-recipe/detail-recipe.component";
import {SimilarRecipeComponent} from "./similar-recipe/similar-recipe.component";

@NgModule({
  declarations: [
    RecipeComponent,
    RecipesComponent,
    DetailRecipeComponent,
    SimilarRecipeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    RecipesComponent
  ],
  providers: [
    RecipesService
  ]
})
export class RecipesModule {

}
