import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAreasComponent } from './search-areas.component';

describe('SearchAreasComponent', () => {
  let component: SearchAreasComponent;
  let fixture: ComponentFixture<SearchAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchAreasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
