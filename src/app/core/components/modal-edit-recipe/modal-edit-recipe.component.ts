import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  ingredientsList = new FormArray([new FormControl('', Validators.required)])

  constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.categoriesService.getDataBase().subscribe({
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

  buildIngredientsList() {
    // const control = new FormControl(false);

    // return this.formBuilder.array(
    //   control,
    //   Validators.required
    // );
  }

  onClick() {
    return this.buttonClicked.emit(false);
  }

  getFormControl(controlName: string) {
    const control = this.form.get(controlName) as FormControl; 
    return control;
  }

  verificaValid(campo: string) {
    return this.form.get(campo)?.valid;
  }

  verificaInvalidTouched(campo: string) {
    return this.form.get(campo)?.invalid && (this.form.get(campo)?.touched || this.form.get(campo)?.dirty);
  }


  setFeedback(campo: string) {
    return {
      'is-invalid': this.verificaInvalidTouched(campo),
      'invalid-feedback': this.verificaInvalidTouched(campo),
      'is-valid': this.verificaValid(campo),
      'has-feedback': this.verificaValid(campo)
    };
  }

  onAdd() {
    this.ingredientsList.push(new FormControl('', Validators.required));
  }

  onRemove(i: number) {
    this.ingredientsList.removeAt(i);
  }
}
