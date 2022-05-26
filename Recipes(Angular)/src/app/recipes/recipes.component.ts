import {ChangeDetectionStrategy, Component, OnInit, SimpleChanges} from "@angular/core";
import {RecipeByName} from "./recipe.interface";
import {Observable} from "rxjs";
import {RecipesService} from "./recipes.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

type RecipesSimpleChanges = {
  [key in keyof RecipesComponent]: SimpleChanges
};
@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls:['./recipes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent implements OnInit{
  form: FormGroup;
  recipes$: Observable<RecipeByName[] | null>
  constructor(private readonly serv: RecipesService) {
    this.form = new FormGroup({
      'recipe': new FormControl('', Validators.required)
    })
  }

  showRecipesByName() {
    const { recipe } = this.form.value;
    if (recipe.length > 0)
    {
      this.recipes$ = this.serv.getRecipesByName(recipe);
    }
    else{
      this.recipes$ = this.serv.getAllRecipes();
    }
  }

  ngOnInit(): void {
    this.recipes$ = this.serv.getAllRecipes();
  }
}
