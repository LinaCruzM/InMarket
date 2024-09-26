import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesDeleteModalComponent } from './currencies-delete-modal.component';

describe('CurrenciesDeleteModalComponent', () => {
  let component: CurrenciesDeleteModalComponent;
  let fixture: ComponentFixture<CurrenciesDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrenciesDeleteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrenciesDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
