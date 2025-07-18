
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent {
  loginForm: FormGroup;
  loginError: boolean = false;
  loginSuccess: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      if (username === 'patient' && password === '1234') {
        this.loginSuccess = true;
        this.loginError = false;
        this.loginForm.reset(); 
      } else {
        this.loginError = true;
        this.loginSuccess = false;
      }
      setTimeout(() => {
        this.loginSuccess = false;
        this.loginError = false;
      }, 3000);

    } else {
      this.loginError = true;
      this.loginSuccess = false;
    }
  }

  onForgotPassword() {
    alert("Redirecting to Forgot Password page...");
  }

  onRegister() {
    alert("Redirecting to Registration page...");
  }

  onThemeToggle(event: any) {
    const isDarkMode = event.target.checked;
    const body = document.body;

    if (isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
}
