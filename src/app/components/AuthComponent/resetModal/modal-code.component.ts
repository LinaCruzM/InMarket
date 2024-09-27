import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-code',
  templateUrl: './modal-code.component.html',
  styleUrls: ['./modal-code.component.css']
})
export class ModalCodeComponent {
  @Output() closeModal = new EventEmitter<boolean>();
  recovery_code: string = ''; // Variable para almacenar el código ingresado

  constructor(private http: HttpClient, private router: Router) {}

  close() {
    this.closeModal.emit(true);
  } 

  verifyCode() {
    this.http.post('http://localhost:8000/api/verify-code', { recovery_code: this.recovery_code })
      .subscribe({
        next: (response) => {
          console.log('Código verificado exitosamente', response);
          // Redirigir al usuario a la pantalla de cambio de contraseña
          this.close(); // Cierra el modal
          this.router.navigate(['/password']);
        },
        error: (error) => {
          console.error('Error verificando el código', error);
          alert('Código de verificación incorrecto. Por favor, inténtalo de nuevo.'); // Mensaje de error
        }
      });
  }
  
}
