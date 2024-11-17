import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPROComponent } from './view-pro.component';

describe('ViewPROComponent', () => {
  let component: ViewPROComponent;
  let fixture: ComponentFixture<ViewPROComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPROComponent]
    });
    fixture = TestBed.createComponent(ViewPROComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
