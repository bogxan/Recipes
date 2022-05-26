export interface Recipe{
  id: number,
  title: string,
  description: string,
  image: string,
  readyMinutes: number,
  recipeUrl: string,
  infoUrl: string
}
export interface SimilarRecipe{
  id: number,
  title: string,
  readyInMinutes: number,
  sourceUrl: string,
}
export interface RecipeByName{
  id: number,
  title: string,
  image: string
}
