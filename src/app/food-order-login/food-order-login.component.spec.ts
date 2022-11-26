import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderLoginComponent } from './food-order-login.component';

describe('FoodOrderLoginComponent', () => {
  let component: FoodOrderLoginComponent;
  let fixture: ComponentFixture<FoodOrderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOrderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
