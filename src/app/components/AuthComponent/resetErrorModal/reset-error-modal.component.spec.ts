import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetErrorModalComponent } from './reset-error-modal.component';

describe('ResetErrorModalComponent', () => {
  let component: ResetErrorModalComponent;
  let fixture: ComponentFixture<ResetErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResetErrorModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
