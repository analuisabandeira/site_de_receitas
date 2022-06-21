import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { MainRecipesComponent } from './components/main-recipes/main-recipes.component';
import { MainCardsComponent } from './components/main-card/main-card.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    MainRecipesComponent,
    MainCardsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
