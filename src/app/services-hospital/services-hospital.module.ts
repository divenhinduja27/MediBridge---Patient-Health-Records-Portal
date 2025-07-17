import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesHospitalModule { }
