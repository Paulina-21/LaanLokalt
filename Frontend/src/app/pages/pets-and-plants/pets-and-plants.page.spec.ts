import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PetsAndPlantsPage } from './pets-and-plants.page';

describe('PetsAndPlantsPage', () => {
  let component: PetsAndPlantsPage;
  let fixture: ComponentFixture<PetsAndPlantsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PetsAndPlantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
