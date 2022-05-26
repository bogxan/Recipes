import {Component, OnInit} from "@angular/core";
import {Recipe, SimilarRecipe} from "../recipe.interface";
import {Observable} from "rxjs";
import {RecipesService} from "../recipes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'detail-recipe',
  templateUrl: 'detail-recipe.component.html',
  styleUrls: ['detail-recipe.component.scss'],
})
export class DetailRecipeComponent implements OnInit {
  recipe$: Observable<Recipe>;
  id: number;
  hideSimilarRecipes: boolean = true;
  similarRecipes$: Observable<SimilarRecipe[]>;
  constructor(private readonly serv: RecipesService,
              private readonly activatedRoute: ActivatedRoute,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    console.log('onInit')
    this.activatedRoute.params.subscribe(
      params=>{
        this.id = params.id;
        console.log(this.id)
        return this.similarRecipes$ = this.serv.getSimilarRecipes(params.id);
      }
    )
    this.recipe$ = this.serv.getRecipeById(this.id);
  }

  onButtonRecipes() {
    this.hideSimilarRecipes = !this.hideSimilarRecipes;
  }
}
