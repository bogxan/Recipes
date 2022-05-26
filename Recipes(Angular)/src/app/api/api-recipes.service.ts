import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  ApiRecipe,
  ApiRecipesByName,
  ApiRecipesSimilar,
  RecipesByNameResponse,
  RecipesResponse
} from "./api-recipes.interface";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";

@Injectable()
export class ApiRecipesService {
  constructor(private readonly httpClient: HttpClient) {
  }

  getAllRecipes(): Observable<ApiRecipe[]> {
    return this.httpClient.get<RecipesResponse>(
      [
        environment.apiUrl,
        'random'
      ].join('/'),
      {
        params: {
          'number': '20',
          'apiKey': environment.key
        }
      }
    ).pipe(
      map(resp => resp.recipes)
    )
  }

  getRecipeById(id: number): Observable<ApiRecipe> {
    return this.httpClient.get<ApiRecipe>(
      [
        environment.apiUrl,
        id,
        'information'
      ].join('/'),
      {
        params: {
          'apiKey': environment.key
        }
      }
    )
  }

  getRecipesByName(query: string): Observable<ApiRecipesByName[]>{
    return this.httpClient.get<RecipesByNameResponse>(
      [
        environment.apiUrl,
        'complexSearch'
      ].join('/'),
      {
        params: {
          'query': query,
          'apiKey': environment.key
        }
      }
    ).pipe(
      map(resp => resp.results)
    )
  }

  getSimilarRecipes(id: number): Observable<ApiRecipesSimilar[]>{
    return this.httpClient.get<ApiRecipesSimilar[]>(
      [
        environment.apiUrl,
        id,
        'similar'
      ].join('/'),
      {
        params: {
          'apiKey': environment.key
        }
      }
    )
  }

}
