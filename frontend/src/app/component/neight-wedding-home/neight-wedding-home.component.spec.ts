import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeightWeddingHomeComponent } from './neight-wedding-home.component';

describe('NeightWeddingHomeComponent', () => {
  let component: NeightWeddingHomeComponent;
  let fixture: ComponentFixture<NeightWeddingHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeightWeddingHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeightWeddingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
