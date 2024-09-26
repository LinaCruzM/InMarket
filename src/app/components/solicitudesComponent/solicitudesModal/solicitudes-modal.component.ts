import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-solicitudes-modal',
  templateUrl: './solicitudes-modal.component.html',
  styleUrl: './solicitudes-modal.component.css'
})
export class SolicitudesModalComponent {
  @Input() showModal: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() currentSolicitation: any = {};
  @Input() persons: any[] = [];
  @Input() types: any[] = [];
  @Input() suppliers: any[] = [];
  
  @Output() submit = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.close.emit();
  }

  onSubmitForm(form: any) {
    this.submit.emit(form);
  }
}
