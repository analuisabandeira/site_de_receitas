import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { CategoriesService } from './services/categories.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    HttpClientModule
  ],
  exports: [
    HeaderModule,
    FooterComponent
  ],
  providers: [
    CategoriesService
  ]
})
export class CoreModule { }
