import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCurrenciesComponent } from './search-currencies.component';

describe('SearchCurrenciesComponent', () => {
  let component: SearchCurrenciesComponent;
  let fixture: ComponentFixture<SearchCurrenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchCurrenciesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
