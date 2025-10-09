import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeightTechWeddingHomeComponent } from './neight-tech-wedding-home.component';

describe('NeightTechWeddingHomeComponent', () => {
  let component: NeightTechWeddingHomeComponent;
  let fixture: ComponentFixture<NeightTechWeddingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeightTechWeddingHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeightTechWeddingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
