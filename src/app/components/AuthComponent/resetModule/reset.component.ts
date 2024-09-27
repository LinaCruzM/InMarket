import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {
  per_mail: string = '';
  activeField: string | null = null;
  showSuccessModal: boolean = false;
  showErrorModal: boolean = false;
  errorMsg: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  activateField(field: string) {
    this.activeField = field;
  }

  deactivateField(field: string) {
    if (!this.per_mail && field === 'per_mail') {
      this.activeField = null;
    }
  }

  isActive(field: string): boolean {
    return this.activeField === field;
  }

  openSuccessModal() {
    this.showSuccessModal = true;
  }

  openErrorModal(message: string) {
    this.errorMsg = message;
    this.showErrorModal = true;
  }

  closeSuccessModal(event: boolean) {
    this.showSuccessModal = event;
  }

  closeErrorModal(event: boolean) {
    this.showErrorModal = event;
  }

  resetForm() {
    const payload = { per_mail: this.per_mail };
    this.http.post('http://localhost:8000/api/Forgot-Password', payload)
      .subscribe({
        next: (response) => {
          this.openSuccessModal(); // Abre el modal de éxito
          console.log('Email sent successfully', response);
        },
        error: (error) => {
          console.error('Error sending email', error);
          this.errorMsg = error.error?.errores || 'Error al enviar el correo';
          if (this.errorMsg.includes('no registrado')) {
            this.openErrorModal(this.errorMsg); // Abre el modal de error
          }
        }
      });
  }
  
}
