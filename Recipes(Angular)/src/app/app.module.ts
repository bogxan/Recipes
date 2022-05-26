import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./shared.module";
import {RecipesModule} from "./recipes/recipes.module";
import {ApiServicesModule} from "./api/api.module";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    RecipesModule,
    ApiServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
