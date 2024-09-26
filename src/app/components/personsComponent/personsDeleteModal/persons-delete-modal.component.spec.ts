import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonsDeleteModalComponent } from './persons-delete-modal.component';

describe('PersonsDeleteModalComponent', () => {
  let component: PersonsDeleteModalComponent;
  let fixture: ComponentFixture<PersonsDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonsDeleteModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonsDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
