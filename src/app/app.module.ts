import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FoodOrderLoginComponent } from './food-order-login/food-order-login.component';
import { FoodOrderAboutComponent } from './food-order-about/food-order-about.component';
import { RouterModule,Routes } from '@angular/router';
import { FoodOrderMealsComponent } from './food-order-meals/food-order-meals.component';
import { FoodOrderDishesComponent } from './food-order-dishes/food-order-dishes.component';
const myroute:Routes=[
  {
    path:'',
    'component':SigninComponent},
   {
     path:'log',
    'component':FoodOrderLoginComponent
  },
  {
    path:'about',
    'component':FoodOrderAboutComponent
  },
  {
    path:'meals',
    'component':FoodOrderMealsComponent
  },
  {
    path:'dish',
    'component':FoodOrderDishesComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    FoodOrderLoginComponent,
    FoodOrderAboutComponent,
    FoodOrderMealsComponent,
    FoodOrderDishesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
