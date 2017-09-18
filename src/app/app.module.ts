import { SearchService } from './search.service';
import { SearchComponent } from './search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { FormsModule }   from '@angular/forms';
import { FavRestaurantComponent } from './fav-restaurant/fav-restaurant.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent,
    FavRestaurantComponent
  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
