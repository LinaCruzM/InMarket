import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-area-modal',
  templateUrl: './area-modal.component.html',
  styleUrls: ['./area-modal.component.css']
})
export class AreaModalComponent {
  @Input() showModal: boolean = false;
  @Input() showDeleteConfirmModal: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() currentArea: any = {
    are_id: 0,
    are_name: '',
    are_limit: 0
  };
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() submitFormEvent = new EventEmitter<void>();
  @Output() confirmDeleteEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  onSubmitForm() {
    this.submitFormEvent.emit();
  }

  confirmDelete() {
    this.confirmDeleteEvent.emit();
  }
}
