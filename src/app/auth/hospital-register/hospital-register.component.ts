import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-hospital-register',
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.css']
})
export class HospitalRegisterComponent {
   fullname: string = '';
  email: string = '';
  phone: string = '';
  dob: string = '';
  role: string = '';
  gender: string = '';
  password: string = '';
  confirmPassword: string = '';

  formError: boolean = false;

  constructor(private router: Router) {}

  onRegister(form: NgForm) {
    this.formError = false;

    
    if (form.invalid || !this.gender || this.password !== this.confirmPassword) {
      this.formError = true;
      return;
    }

    
    alert('Registration successful!');
    console.log('Registered Data:', {
      fullname: this.fullname,
      email: this.email,
      phone: this.phone,
      dob: this.dob,
      role: this.role,
      gender: this.gender,
      password: this.password
    });

  
  }
}
