import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FoodOrderLoginComponent } from './food-order-login/food-order-login.component';
import { FoodOrderAboutComponent } from './food-order-about/food-order-about.component';
import { RouterModule,Routes } from '@angular/router';
const myroute:Routes=[
  {
    path:'',
    'component':SigninComponent
  },{
    path:'login',
    'component':FoodOrderLoginComponent
  },
  {
    path:'about',
    'component':FoodOrderAboutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    FoodOrderLoginComponent,
    FoodOrderAboutComponent
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
