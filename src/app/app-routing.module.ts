import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesModule } from './pages/categories/categories.module';
import { HomeModule } from './pages/home/home.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => HomeModule 
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },
  { 
    path: 'category',
    loadChildren: () => CategoriesModule 
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}