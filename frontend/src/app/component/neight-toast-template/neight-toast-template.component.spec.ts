import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeightToastTemplateComponent } from './neight-toast-template.component';

describe('NeightToastTemplateComponent', () => {
  let component: NeightToastTemplateComponent;
  let fixture: ComponentFixture<NeightToastTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeightToastTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeightToastTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
