import {Component, Input} from "@angular/core";
import {SimilarRecipe} from "../recipe.interface";

@Component({
  selector: 'similar-recipe',
  templateUrl: 'similar-recipe.component.html',
  styleUrls: ['similar-recipe.component.scss'],
})
export class SimilarRecipeComponent {
  @Input() recipe: SimilarRecipe;

}
