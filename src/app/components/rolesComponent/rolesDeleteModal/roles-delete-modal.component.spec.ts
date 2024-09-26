import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesDeleteModalComponent } from './roles-delete-modal.component';

describe('RolesDeleteModalComponent', () => {
  let component: RolesDeleteModalComponent;
  let fixture: ComponentFixture<RolesDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RolesDeleteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RolesDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
