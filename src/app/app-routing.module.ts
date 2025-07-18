import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutUsComponent } from './home/about-us/about-us.component';
import { HospitalLoginComponent } from './auth/hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './auth/hospital-register/hospital-register.component';
import { PatientLoginComponent } from './auth/patient-login/patient-login.component';
import { PatientRegisterComponent } from './auth/patient-register/patient-register.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { CreateComponent } from './services-hospital/create/create.component';
import { UpdateComponent } from './services-hospital/update/update.component';
import { ViewComponent } from './services-hospital/view/view.component';
import { AppointmentsComponent } from './services-patient/appointments/appointments.component';
import { PrescriptionsComponent } from './services-patient/prescriptions/prescriptions.component';
import { HealthStatsComponent } from './services-patient/health-stats/health-stats.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'hospital-login',
    component: HospitalLoginComponent
  },
  {
    path: 'hospital-register',
    component: HospitalRegisterComponent
  },
  {
    path: 'patient-login',
    component: PatientLoginComponent
  },
  {
    path: 'patient-register',
    component: PatientRegisterComponent
  },
  {
    path: 'profie',
    component: ProfileComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update',
    component: UpdateComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  },
  {
    path: 'prescriptions',
    component: PrescriptionsComponent
  },
  {
    path: 'health-stats',
    component: HealthStatsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


