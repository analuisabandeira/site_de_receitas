import { Component, OnInit } from '@angular/core';

import { CategoriesService } from 'src/app/core/services/categories.service';
import { IRecipe } from 'src/app/models/recipe-interface';

@Component({
  selector: 'app-main-recipes',
  templateUrl: './main-recipes.component.html',
  styleUrls: ['./main-recipes.component.scss']
})
export class MainRecipesComponent implements OnInit {
  recipesList: IRecipe[] = [];

  link!: string;

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getDataBase().subscribe(categories => {
      categories.forEach(category => {
        this.recipesList.push(...category.recipes);
      });

      this.recipesList = this.recipesList.filter(recipe => recipe.bestDishes);

      if (this.recipesList.length > 6) {
        this.recipesList.length = 6;
      }
    });
  }
}
