import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeightTechWeddingGuestListComponent } from './neight-tech-wedding-guest-list.component';

describe('NeightTechWeddingGuestListComponent', () => {
  let component: NeightTechWeddingGuestListComponent;
  let fixture: ComponentFixture<NeightTechWeddingGuestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeightTechWeddingGuestListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeightTechWeddingGuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
