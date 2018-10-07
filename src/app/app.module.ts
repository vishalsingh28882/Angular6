import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ReceipesComponent} from './receipes/receipes.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {TablesComponent} from './tables/tables.component';
import {OrdersComponent} from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ReceipesComponent,
    IngredientsComponent,
    TablesComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
