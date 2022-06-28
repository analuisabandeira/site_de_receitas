import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, NavbarComponent]
})
export class HeaderModule {}
