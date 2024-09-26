import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-persons-modal',
  templateUrl: './persons-modal.component.html',
  styleUrl: './persons-modal.component.css'
})
export class PersonsModalComponent {
  @Input() showModal: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() currentPerson: any;
  @Input() roles: any[] = [];
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() submitFormEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  onSubmit() {
    this.submitFormEvent.emit();
  }
}
