import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiquesSstComponent } from './politiques-sst.component';

describe('PolitiquesSstComponent', () => {
  let component: PolitiquesSstComponent;
  let fixture: ComponentFixture<PolitiquesSstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolitiquesSstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitiquesSstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
