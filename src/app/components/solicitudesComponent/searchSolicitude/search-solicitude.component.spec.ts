import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSolicitudeComponent } from './search-solicitude.component';

describe('SearchSolicitudeComponent', () => {
  let component: SearchSolicitudeComponent;
  let fixture: ComponentFixture<SearchSolicitudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchSolicitudeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchSolicitudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
