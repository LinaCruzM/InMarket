import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSuppliersComponent } from './search-suppliers.component';

describe('SearchSuppliersComponent', () => {
  let component: SearchSuppliersComponent;
  let fixture: ComponentFixture<SearchSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchSuppliersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
