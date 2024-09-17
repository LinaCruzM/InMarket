// src/app/reset/reset.component.ts
import { Component } from '@angular/core';
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

  constructor(private router: Router) {}

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

  async resetForm() {
    if (this.emailIsValid) {
      try {
        // Simulamos una llamada al servicio de autenticación
        await this.access(this.per_mail);
        this.router.navigate(['/users']);
      } catch (error) {
        console.error('Ha ocurrido un error durante el acceso:', error);
        // this.showModal = true;
      }
    } else {
      // this.showModal = true;
    }
  }

  async access(email: string) {
    // Aquí iría la llamada al servicio de autenticación
    return new Promise((resolve, reject) => {
      if (email === 'test@test.com') {
        resolve(true);
      } else {
        reject('Invalid email');
      }
    });
  }
}
