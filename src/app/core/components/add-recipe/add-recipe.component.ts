import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent implements OnInit {

 @Output() buttonClicked= new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    return this.buttonClicked.emit(true);
  }
}