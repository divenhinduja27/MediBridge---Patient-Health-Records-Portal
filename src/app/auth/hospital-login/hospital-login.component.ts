import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css']
})
export class HospitalLoginComponent {
    email: string = '';
  password: string = '';
  role: string = '';

  constructor(private router: Router) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
      alert('Please fill all required fields correctly.');
      return;
    }

    console.log('Login details:', this.email, this.password, this.role);

    // Simulated login check
    if (this.email === 'patient@example.com' && this.password.length >= 8 && this.role === 'patient') {
      alert('Login successful!');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
