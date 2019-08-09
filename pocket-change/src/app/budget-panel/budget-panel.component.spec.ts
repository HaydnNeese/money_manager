import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetPanelComponent } from './budget-panel.component';

describe('BudgetPanelComponent', () => {
  let component: BudgetPanelComponent;
  let fixture: ComponentFixture<BudgetPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
