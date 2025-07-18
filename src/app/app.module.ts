import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HospitalLoginComponent } from './auth/hospital-login/hospital-login.component';
import { HospitalRegisterComponent } from './auth/hospital-register/hospital-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalLoginComponent,
    HospitalRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
