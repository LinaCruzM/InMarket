import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-roles-delete-modal',
  templateUrl: './roles-delete-modal.component.html',
  styleUrl: './roles-delete-modal.component.css'
})
export class RolesDeleteModalComponent {
  @Input() showDeleteModal: boolean = false;
  @Input() rolToDelete: number | null = null;

  @Output() closeDeleteModalEvent = new EventEmitter<void>();
  @Output() confirmDeleteEvent = new EventEmitter<number>();

  closeDeleteModal() {
    this.closeDeleteModalEvent.emit();
  }

  confirmDelete() {
    if (this.rolToDelete !== null) {
      this.confirmDeleteEvent.emit(this.rolToDelete);
      this.closeDeleteModal();
    }
  } 
}
