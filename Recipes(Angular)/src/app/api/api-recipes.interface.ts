export interface ApiRecipe{
  id: number,
  title: string,
  image: string,
  summary: string,
  readyInMinutes: number,
  sourceUrl: string,
  spoonacularSourceUrl: string
}
export interface RecipesResponse{
  recipes: ApiRecipe[];
}
export interface ApiRecipesSimilar {
  id: number,
  title: string,
  readyInMinutes: number,
  sourceUrl: string,
}
export interface ApiRecipesByName{
  id: number,
  title: string,
  image: string
}
export interface RecipesByNameResponse{
  results: ApiRecipesByName[];
}
