import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeightWeddingQrCodeComponent } from './neight-wedding-qr-code.component';

describe('NeightWeddingQrCodeComponent', () => {
  let component: NeightWeddingQrCodeComponent;
  let fixture: ComponentFixture<NeightWeddingQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeightWeddingQrCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeightWeddingQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
