import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppointmentComponent } from './appointment/appointment.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { HealthStatsComponent } from './health-stats/health-stats.component';



@NgModule({
  declarations: [
    AppointmentComponent,
    PrescriptionsComponent,
    AppointmentsComponent,
    HealthStatsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesPatientModule { }
