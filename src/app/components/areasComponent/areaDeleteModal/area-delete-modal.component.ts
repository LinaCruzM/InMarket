import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-area-delete-modal',
  templateUrl: './area-delete-modal.component.html',
  styleUrl: './area-delete-modal.component.css'
})
export class AreaDeleteModalComponent {
  @Input() showModal: boolean = false;
  @Input() areaToDelete: any;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() confirmDeleteEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  confirmDelete() {
    this.confirmDeleteEvent.emit();
  }
}
