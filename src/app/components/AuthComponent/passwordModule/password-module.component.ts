import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-password-module',
  templateUrl: './password-module.component.html',
  styleUrl: './password-module.component.css'
})
export class PasswordModuleComponent {
  per_password: string = '';
  per_password2: string = '';
  showPassword: boolean = false;
  activeField: string | null = null;
  passwordIsValid: boolean = true;
  
  constructor( private router: Router) {}

  activateField(field: string) {
    this.activeField = field;
  }

  deactivateField(field: string) {
    if (!this.per_password && field === 'per_password' || !this.per_password2 && field === 'per_password2' ) {
      this.activeField = null;
    }
  }

  isActive(field: string): boolean {
    return this.activeField === field;
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validatePassword() {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;
    this.passwordIsValid = passwordPattern.test(this.per_password || this.per_password2);
  }

  submitForm() {
    this.validatePassword();
  
    if (this.passwordIsValid) {
      const observer = {
        next: (response: any) => {
          console.log('Cambio exitoso:', response);
          localStorage.setItem('token', response.token);
          this.router.navigate(['/solicitudes']);
        },
        error: (error: any) => {
          console.error('Error de login:', error);
          alert('Error de autenticación. Verifica tus credenciales.');
        },
        complete: () => {
          console.log('Login request completed.');
        }
      };
  }
}
}
 