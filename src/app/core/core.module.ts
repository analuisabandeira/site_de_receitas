import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { CategoriesService } from './services/categories.service';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { ModalEditRecipeComponent } from './components/modal-edit-recipe/modal-edit-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';

@NgModule({
  declarations: [
    FooterComponent,
    ModalEditRecipeComponent,
    AddRecipeComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderModule,
    FooterComponent,
    ModalEditRecipeComponent,
    AddRecipeComponent,
    InputFieldComponent
  ],
  providers: [
    CategoriesService
  ]
})
export class CoreModule { }
