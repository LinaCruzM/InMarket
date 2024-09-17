import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    per_mail: string = '';
    per_password: string = '';
    showPassword: boolean = false;
    activeField: string | null = null;
    emailIsValid: boolean = true;
    passwordIsValid: boolean = true;
    // showModal: boolean = false;
  

    constructor(private router: Router) {}

    activateField(field: string) {
      this.activeField = field;
    }
  
    deactivateField(field: string) {
      if (!this.per_mail && field === 'per_mail' || !this.per_password && field === 'per_password') {
        this.activeField = null;
      }
    }
  
    isActive(field: string): boolean {
      return this.activeField === field;
    }
  
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    }
  
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailIsValid = emailPattern.test(this.per_mail);
    }
  
    validatePassword() {
      const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/;
      this.passwordIsValid = passwordPattern.test(this.per_password);
    }
  
    async submitForm() {
      this.validateEmail();
      this.validatePassword();
  
      if (this.emailIsValid && this.passwordIsValid) {
        try {
          // Simulamos una llamada al servicio de autenticación
          await this.access(this.per_mail, this.per_password);
          this.router.navigate(['/users']);
        } catch (error) {
          console.error('Ha ocurrido un error durante el acceso:', error);
          // this.showModal = true;
        }
      } else {
        // this.showModal = true;
      }
    }
  
    async access(email: string, password: string) {
      return new Promise((resolve, reject) => {
        if (email === 'prueba@correo.com' && password === 'Prueba@1234') {
          resolve(true);
        } else {
          reject('Credenciales inválidas');
        }
      });
    }
}
