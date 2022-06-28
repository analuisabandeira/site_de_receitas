import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutKikaComponent } from './about-kika.component';

describe('AboutKikaComponent', () => {
  let component: AboutKikaComponent;
  let fixture: ComponentFixture<AboutKikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutKikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutKikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
