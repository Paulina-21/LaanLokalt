import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FoodPage } from './food.page';

describe('FoodPage', () => {
  let component: FoodPage;
  let fixture: ComponentFixture<FoodPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(FoodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
