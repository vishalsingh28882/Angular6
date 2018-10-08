import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {OrderComponent} from './order/order.component';
import {TableComponent} from './table/table.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {ReceipesComponent} from './receipes/receipes.component';
import {ReceipeComponent} from './receipes/receipe/receipe.component';
import {IngredientComponent} from './ingredients/ingredient/ingredient.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {HeaderComponent} from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    TableComponent,
    IngredientsComponent,
    ReceipesComponent,
    ReceipeComponent,
    IngredientComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
