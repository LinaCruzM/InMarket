import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrl: './roles-modal.component.css'
})
export class RolesModalComponent {
  @Input() showModal: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() currentRol: any = {};
  @Input() areas: any[] = [];
  
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() submitFormEvent = new EventEmitter<any>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  onSubmitForm(form: NgForm) {
    if (form.valid) {
      this.submitFormEvent.emit(this.currentRol);
      this.closeModal();
    }
  }
}
