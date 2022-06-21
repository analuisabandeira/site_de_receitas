import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICategory } from 'src/app/models/category-interface';
import { IRecipe } from 'src/app/models/recipe-interface';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories!: ICategory[];

  // private categories: ICategory[] = [
  //   {  router: 'datas_festivas', name: 'Datas Festivas' },
  //   {  router: 'sobremesas', name: 'Bolos e Sobremesas' },
  //   {  router: 'tortas_salgadas', name: 'Tortas Salgadas' },
  //   {  router: 'receitas_saudaveis', name: 'Receitas Saudáveis' },
  //   {  router: 'sopas', name: 'Sopas e Caldos' }
  // ];

  constructor(private http: HttpClient) {}

  getCategory() {
    // return this.categories;
    return this.http.get<ICategory[]>('assets/mock/mock_database.json');
  }

  // getRecipes() {}
}
function Input() {
  throw new Error('Function not implemented.');
}
