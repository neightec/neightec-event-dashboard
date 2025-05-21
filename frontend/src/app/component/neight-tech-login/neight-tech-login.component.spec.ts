import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeightTechLoginComponent } from './neight-tech-login.component';

describe('NeightTechLoginComponent', () => {
  let component: NeightTechLoginComponent;
  let fixture: ComponentFixture<NeightTechLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeightTechLoginComponent]
    });
    fixture = TestBed.createComponent(NeightTechLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
