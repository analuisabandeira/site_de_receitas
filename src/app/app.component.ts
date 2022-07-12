import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Receitas da Vovó Kika';

  modalVisible = false;
  navbarVisible = false;

  modalVisibility(event: boolean) {
    this.modalVisible = event;
  }
}
