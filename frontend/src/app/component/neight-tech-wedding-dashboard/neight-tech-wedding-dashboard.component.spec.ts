import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeightTechWeddingDashboardComponent } from './neight-tech-wedding-dashboard.component';

describe('NeightTechWeddingDashboardComponent', () => {
  let component: NeightTechWeddingDashboardComponent;
  let fixture: ComponentFixture<NeightTechWeddingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeightTechWeddingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeightTechWeddingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
