import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-currencies-delete-modal',
  templateUrl: './currencies-delete-modal.component.html',
  styleUrl: './currencies-delete-modal.component.css'
})
export class CurrenciesDeleteModalComponent {
  @Input() showDeleteModal: boolean = false;
  @Input() currencyToDelete: number | null = null;
  @Output() closeDeleteModalEvent = new EventEmitter<void>();
  @Output() confirmDeleteEvent = new EventEmitter<void>();

  closeModal() {
    this.closeDeleteModalEvent.emit();
  }

  confirmDelete() {
    this.confirmDeleteEvent.emit();
  }
}
