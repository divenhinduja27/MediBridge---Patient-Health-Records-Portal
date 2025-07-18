import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './hospital-register/hospital-register.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HospitalLoginComponent,
    HospitalRegisterComponent,
    PatientRegisterComponent,
    PatientLoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
