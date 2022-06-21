import { Component, Input, OnInit } from '@angular/core';

import { IRecipe } from 'src/app/models/recipe-interface';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardsComponent implements OnInit {
  @Input() recipe!: IRecipe;

  constructor() {}

  ngOnInit(): void {}
}