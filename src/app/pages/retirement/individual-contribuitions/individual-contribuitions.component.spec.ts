import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualContribuitionsComponent } from './individual-contribuitions.component';

describe('IndividualContribuitionsComponent', () => {
  let component: IndividualContribuitionsComponent;
  let fixture: ComponentFixture<IndividualContribuitionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualContribuitionsComponent]
    });
    fixture = TestBed.createComponent(IndividualContribuitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
