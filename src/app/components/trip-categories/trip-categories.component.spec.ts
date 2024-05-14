import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripCategoriesComponent } from './trip-categories.component';

describe('TripCategoriesComponent', () => {
  let component: TripCategoriesComponent;
  let fixture: ComponentFixture<TripCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
