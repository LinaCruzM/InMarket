import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-persons-delete-modal',
  templateUrl: './persons-delete-modal.component.html',
  styleUrl: './persons-delete-modal.component.css'
})
export class PersonsDeleteModalComponent {
  @Input() showDeleteConfirmModal: boolean = false;
  @Input() personToDelete: any = null;
  @Output() closeDeleteConfirmModalEvent = new EventEmitter<void>();
  @Output() confirmDeleteEvent = new EventEmitter<void>();

  closeModal() {
    this.closeDeleteConfirmModalEvent.emit();
  }

  confirmDelete() {
    this.confirmDeleteEvent.emit();
  }
}
