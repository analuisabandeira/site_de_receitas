import { Component, OnInit } from '@angular/core';

import { CategoriesService } from 'src/app/core/services/categories.service';
import { IRoutes } from 'src/app/models/routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routesList?: IRoutes[];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.routesList = this.categoriesService.routes;
  }
}
