import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionContactComponent } from './section-contact.component';

describe('SectionContactComponent', () => {
  let component: SectionContactComponent;
  let fixture: ComponentFixture<SectionContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
