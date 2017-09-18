import { AppComponent } from './app.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  FavRestaurantComponent} from './fav-restaurant/fav-restaurant.component'
const routes: Routes = [
 
  { path: 'fav-restaurtant', component:FavRestaurantComponent},
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
