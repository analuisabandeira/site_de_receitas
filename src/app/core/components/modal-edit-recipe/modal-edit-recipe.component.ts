import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICategory } from 'src/app/models/category-interface';
import { CategoriesService } from '../../services/categories.service';

interface FileEvent extends EventTarget {
  files?: File[];
}

@Component({
  selector: 'app-modal-edit-recipe',
  templateUrl: './modal-edit-recipe.component.html',
  styleUrls: ['./modal-edit-recipe.component.scss']
})
export class ModalEditRecipeComponent implements OnInit {
  @Input() modalVisible = false;
  @Output() buttonClicked = new EventEmitter<boolean>();

  form!: FormGroup;

  categories!: ICategory[];
  favoriteRecipes!: any[];

  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {}

  ngOnInit(): void {

    this.categoriesService.getCategory().subscribe({
      next: dados => (this.categories = dados)
    }); 

    this.favoriteRecipes = this.categoriesService.getFavorites();

    this.form = this.formBuilder.group({
      category: [null, Validators.required],
      recipeName: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      preparationTime: [null, [Validators.required, Validators.minLength(1)]],
      revenue: [null, [Validators.required, Validators.maxLength(2)]],
      image: [null, [Validators.required]],
      betestDishes: ['s'],
      ingredients: this.buildIngredientsList(),
      methodOfPreparation: [null, [Validators.required, Validators.minLength(300)]]
    });

    this.form.get('image')?.valueChanges.subscribe({
      next: value => {
        console.log(value);
      }
    });
  }

  fileUpload(event: FileEvent | null) {
    if (event && event.files && event.files.length > 0) {
      console.log(event?.files[0]);
    }
  }

  buildIngredientsList() {}

  onClick() {
    return this.buttonClicked.emit(false);
  }
}
