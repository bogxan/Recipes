import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Recipe, RecipeByName, SimilarRecipe} from "./recipe.interface";
import {ApiRecipesService} from "../api/api-recipes.service";
import {map} from "rxjs/operators";

@Injectable()
export class RecipesService {
  constructor(private readonly recipesService: ApiRecipesService) {

  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.recipesService.getAllRecipes().pipe(
      map(recipes => recipes.map(
        recipe => ({
          id: recipe.id,
          title: recipe.title,
          description: recipe.summary,
          image: recipe.image,
          readyMinutes: recipe.readyInMinutes,
          recipeUrl: recipe.sourceUrl,
          infoUrl: recipe.spoonacularSourceUrl
        }))
      )
    )
  }

  getSimilarRecipes(id: number): Observable<SimilarRecipe[]> {
    return this.recipesService.getSimilarRecipes(id);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.recipesService.getRecipeById(id).pipe(
      map(recipe => ({
        id: recipe.id,
        title: recipe.title,
        description: recipe.summary,
        image: recipe.image,
        readyMinutes: recipe.readyInMinutes,
        recipeUrl: recipe.sourceUrl,
        infoUrl: recipe.spoonacularSourceUrl
      }))
    );
  }

  getRecipesByName(query: string): Observable<RecipeByName[]> {
    return this.recipesService.getRecipesByName(query).pipe(
      map(recipes => recipes.map(
        recipe => ({
          id: recipe.id,
          title: recipe.title,
          image: recipe.image,
        }))
      )
    )
  }
}

