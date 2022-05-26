import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {ApiRecipesService} from "./api-recipes.service";

@NgModule({
  declarations:[],
  imports:[
    HttpClientModule
  ],
  exports: [],
  providers:[
    ApiRecipesService
  ]
})
export class ApiServicesModule{

}
