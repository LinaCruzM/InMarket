import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-currencies-modal', 
  templateUrl: './currencies-modal.component.html',
  styleUrl: './currencies-modal.component.css'
})
export class CurrenciesModalComponent {
  @Input() showModal: boolean = false;
  @Input() isEditMode: boolean = false;
  @Input() currentCurrency: any;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() submitFormEvent = new EventEmitter<void>();

  closeModal() {
    this.closeModalEvent.emit();
  }

  onSubmit() {
    this.submitFormEvent.emit();
  }
}
