
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent {
  registerForm: FormGroup;
  registrationSuccess = false;
  registrationError = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
        this.registrationError = true;
        this.registrationSuccess = false;
        return;
      }

      this.registrationSuccess = true;
      this.registrationError = false;
      console.log('Registered with:', this.registerForm.value);
      this.registerForm.reset();

      setTimeout(() => {
        this.registrationSuccess = false;
        this.registrationError = false;
      }, 3000);
    } else {
      this.registrationError = true;
      this.registrationSuccess = false;
    }
  }

  onThemeToggle(event: any) {
    const isDarkMode = event.target.checked;
    const body = document.body;
    isDarkMode ? body.classList.add('dark-mode') : body.classList.remove('dark-mode');
  }
}

