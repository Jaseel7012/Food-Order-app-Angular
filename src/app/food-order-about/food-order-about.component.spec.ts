import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderAboutComponent } from './food-order-about.component';

describe('FoodOrderAboutComponent', () => {
  let component: FoodOrderAboutComponent;
  let fixture: ComponentFixture<FoodOrderAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOrderAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
