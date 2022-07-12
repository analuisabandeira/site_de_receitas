import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    NotFoundComponent,
    RecipeDetailsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
