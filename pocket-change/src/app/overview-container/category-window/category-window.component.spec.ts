import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryWindowComponent } from './category-window.component';

describe('CategoryWindowComponent', () => {
  let component: CategoryWindowComponent;
  let fixture: ComponentFixture<CategoryWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
