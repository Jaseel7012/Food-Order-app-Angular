import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderMealsComponent } from './food-order-meals.component';

describe('FoodOrderMealsComponent', () => {
  let component: FoodOrderMealsComponent;
  let fixture: ComponentFixture<FoodOrderMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderMealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOrderMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
