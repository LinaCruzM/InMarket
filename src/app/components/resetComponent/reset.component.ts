// src/app/reset/reset.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; // Asegúrate de que Router esté importado

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css'] // Asegúrate de que sea styleUrls, no styleUrl
})
export class ResetComponent {
  per_mail: string = '';
  activeField: string | null = null;
  emailIsValid: boolean = true;
  showModal: boolean = false;
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


  // Método para abrir el modal
  openModal() {
    this.showModal = true;
  }

  // Método para cerrar el modal
  closeModal(event: boolean) {
    this.showModal = event;
  }

  resetForm() {
    const payload = { per_mail: this.per_mail };
    this.http.post('http://localhost:8000/api/Forgot-Password', payload)
      .subscribe({
        next: (response) => {
          this.openModal();
          console.log('Email sent successfully', response);
          // Redirigir o mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error sending email', error);
          this.showModal = true;
          this.errorMsg = error.error?.errores || 'Error al enviar el correo';
        }
      });
  }
}
