import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modal-code',
  templateUrl: './modal-code.component.html',
  styleUrls: ['./modal-code.component.css']
})
export class ModalCodeComponent {
  recoveryCode: string = '';
  errorMessage: string = '';
  @Output() closeModal = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {}

  verifyCode() {
    const payload = { per_mail:'', recovery_code: this.recoveryCode };
    
    this.http.post('http://localhost:8000/api/verify-code', payload)
      .subscribe({
        next: (response) => {
          console.log('Código verificado con éxito', response);
          this.close();
        },
        error: (error) => {
          console.error('Error al verificar el código', error);
          this.errorMessage = error.error || 'Error al verificar el código';
        }
      });
  }

  close() {
    this.closeModal.emit(true);
  }
}
