import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './src/app/app.component';
import {FormsModule} from '@angular/forms';
import {AppOneComponent} from './src/app/components/one/app-one.component';
import {TwoComponent} from './src/app/components/two/two.component';


@NgModule({
  declarations: [
    AppComponent,
    AppOneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
