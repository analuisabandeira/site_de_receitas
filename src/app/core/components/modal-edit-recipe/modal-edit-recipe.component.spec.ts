import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditRecipeComponent } from './modal-edit-recipe.component';

describe('ModalEditRecipeComponent', () => {
  let component: ModalEditRecipeComponent;
  let fixture: ComponentFixture<ModalEditRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
