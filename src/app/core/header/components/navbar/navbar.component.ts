import { Component, OnInit } from '@angular/core';

import { CategoriesService } from 'src/app/core/services/categories.service';
import { ICategory } from 'src/app/models/category-interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categoriesList?: ICategory[];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getCategory().subscribe(categories => {
      this.categoriesList = categories;
    });
  }
}
