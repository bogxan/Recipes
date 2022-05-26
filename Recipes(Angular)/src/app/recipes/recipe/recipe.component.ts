import {Component, Input} from "@angular/core";
import {RecipeByName} from "../recipe.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'recipe',
  templateUrl: 'recipe.component.html',
  styleUrls: ['recipe.component.scss'],
})
export class RecipeComponent {
  @Input() recipe: RecipeByName;
  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }
  onShowDetails(id: number){
    console.log('showDetails')
    this.router.navigate([`/details/${id}`]).then();
  }

}
