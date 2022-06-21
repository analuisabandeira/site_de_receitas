import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from './home/home.module';
import { CategoriesService } from '../core/services/categories.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule
  ],
  providers: [
    CategoriesService
  ]
})
export class PagesModule { }
