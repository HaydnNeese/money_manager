import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetWindowComponent } from './budget-window.component';

describe('BudgetWindowComponent', () => {
  let component: BudgetWindowComponent;
  let fixture: ComponentFixture<BudgetWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
