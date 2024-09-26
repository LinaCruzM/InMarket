import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeleteModalComponent } from './area-delete-modal.component';

describe('AreaDeleteModalComponent', () => {
  let component: AreaDeleteModalComponent;
  let fixture: ComponentFixture<AreaDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreaDeleteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AreaDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
