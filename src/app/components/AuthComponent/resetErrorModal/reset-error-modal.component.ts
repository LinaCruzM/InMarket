import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reset-error-modal',
  templateUrl: './reset-error-modal.component.html',
  styleUrl: './reset-error-modal.component.css'
})
export class ResetErrorModalComponent {
  @Input() errorMsgFromParent: string = '';
  @Output() closeModal = new EventEmitter<boolean>();

  close() {
    this.closeModal.emit(true);
  }
}
