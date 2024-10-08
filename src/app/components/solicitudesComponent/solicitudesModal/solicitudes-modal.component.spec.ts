import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesModalComponent } from './solicitudes-modal.component';

describe('SolicitudesModalComponent', () => {
  let component: SolicitudesModalComponent;
  let fixture: ComponentFixture<SolicitudesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolicitudesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitudesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
