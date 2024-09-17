import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesSolicitudeComponent } from './types-solicitude.component';

describe('TypesSolicitudeComponent', () => {
  let component: TypesSolicitudeComponent;
  let fixture: ComponentFixture<TypesSolicitudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypesSolicitudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TypesSolicitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
