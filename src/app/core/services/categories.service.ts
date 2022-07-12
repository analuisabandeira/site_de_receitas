import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ICategory } from 'src/app/models/category-interface';
import { IRoutes } from 'src/app/models/routes';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  filteredCategory!: ICategory;

  routes: IRoutes[] = [
    { link: 'datas_festivas', title: 'Datas Festivas' },
    { link: 'sobremesas', title: 'Bolos e Sobremesas' },
    { link: 'tortas_salgadas', title: 'Tortas Salgadas' },
    { link: 'receitas_saudaveis', title: 'Receitas Saudáveis' },
    { link: 'sopas', title: 'Sopas e Caldos' }
  ];

  constructor(private http: HttpClient) {}

  getDataBase() {
    return this.http.get<ICategory[]>('assets/mock/mock_database.json');
  }

  async getCategory(id: string): Promise<ICategory | undefined>{
    const categories = await firstValueFrom(this.getDataBase());

    return categories.find(category => category.categoryId == id);

    // this.getDataBase().subscribe(categories => {
    //   this.filteredCategory = categories.find(category => {
    //     const teste = category.categoryId == id;

    //     return teste;
    //   }) as ICategory;
    // });
    // return this.filteredCategory;
  }

  // getCategory(id: string): any {
  //   this.getDataBase().subscribe(dados => (this.filteredCategory = dados));

  //   for (let i = 0; i < this.filteredCategory.length; i++) {
  //     let category = this.filteredCategory[i];

  //     if (category.categoryId == id) {
  //       this.categoria = category;
  //     }
  //     return null;
  //   }

  //   return this.categoria;
  // }

  getFavorites() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' }
    ];
  }
}
function Input() {
  throw new Error('Function not implemented.');
}
