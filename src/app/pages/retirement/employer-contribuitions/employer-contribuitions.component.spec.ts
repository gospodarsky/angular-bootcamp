import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerContribuitionsComponent } from './employer-contribuitions.component';

describe('EmployerContribuitionsComponent', () => {
  let component: EmployerContribuitionsComponent;
  let fixture: ComponentFixture<EmployerContribuitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployerContribuitionsComponent]
    });
    fixture = TestBed.createComponent(EmployerContribuitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
