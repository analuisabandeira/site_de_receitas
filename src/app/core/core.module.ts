import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { CategoriesService } from './services/categories.service';
import { InputFieldComponent } from '../shared/components/input-field/input-field.component';
import { ModalEditRecipeComponent } from './components/modal-edit-recipe/modal-edit-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/components/navbar/navbar.component';
import { ErrorMessageComponent } from '../shared/components/error-message/error-message.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ModalEditRecipeComponent,
    AddRecipeComponent,
    InputFieldComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
   
    HeaderComponent,
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
