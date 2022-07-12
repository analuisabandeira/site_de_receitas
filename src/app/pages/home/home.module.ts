import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { MainRecipesComponent } from './components/main-recipes/main-recipes.component';
import { MainCardsComponent } from './components/main-card/main-card.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutKikaComponent } from './components/about-kika/about-kika.component';
import { SectionContactComponent } from './components/section-contact/section-contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainRecipesComponent,
    MainCardsComponent,
    AboutKikaComponent,
    SectionContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class HomeModule { }
