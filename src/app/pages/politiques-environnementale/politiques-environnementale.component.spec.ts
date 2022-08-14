import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiquesEnvironnementaleComponent } from './politiques-environnementale.component';

describe('PolitiquesEnvironnementaleComponent', () => {
  let component: PolitiquesEnvironnementaleComponent;
  let fixture: ComponentFixture<PolitiquesEnvironnementaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolitiquesEnvironnementaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitiquesEnvironnementaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
