import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderDishesTypeComponent } from './food-order-dishes-type.component';

describe('FoodOrderDishesTypeComponent', () => {
  let component: FoodOrderDishesTypeComponent;
  let fixture: ComponentFixture<FoodOrderDishesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderDishesTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOrderDishesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
