import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesModalComponent } from './currencies-modal.component';

describe('CurrenciesModalComponent', () => {
  let component: CurrenciesModalComponent;
  let fixture: ComponentFixture<CurrenciesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrenciesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrenciesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
