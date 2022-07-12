import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CategoriesService } from 'src/app//core/services/categories.service';
import { ICategory } from 'src/app/models/category-interface';
import { IRecipe } from 'src/app/models/recipe-interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  recipesList?: IRecipe[];
  category?: ICategory;
  inscricao!: Subscription;
  id!: string;

  constructor(private route: ActivatedRoute, private categoriesService: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(async (params: any) => {
      this.id = params['category'];

      console.log(this.id);
      
      this.category = await this.categoriesService.getCategory(this.id);
      this.recipesList = this.category?.recipes;

      if (!this.category) {
        this.router.navigate(['/notFound']);
      }

      console.log(this.category);
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
