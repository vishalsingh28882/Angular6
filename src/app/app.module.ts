import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {ReceipesComponent} from './receipes/receipes.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {TablesComponent} from './tables/tables.component';
import {OrdersComponent} from './orders/orders.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';

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
    BrowserModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
