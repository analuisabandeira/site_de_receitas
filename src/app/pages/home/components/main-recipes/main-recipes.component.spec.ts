import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRecipesComponent } from './main-recipes.component';

describe('MainRecipesComponent', () => {
  let component: MainRecipesComponent;
  let fixture: ComponentFixture<MainRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
