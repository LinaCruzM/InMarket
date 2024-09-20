import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { LoginService } from '../../services/loginService/login.service';

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

  constructor(private loginService: LoginService, private router: Router) {}

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

  submitForm() {
    this.validateEmail();
    this.validatePassword();
  
    if (this.emailIsValid && this.passwordIsValid) {
      const observer = {
        next: (response: any) => {
          console.log('Login exitoso:', response);
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
  
      this.loginService.login(this.per_mail, this.per_password).subscribe(observer);
    } else {
      alert('Por favor, corrige los errores en el formulario.');
    }
  }
}
