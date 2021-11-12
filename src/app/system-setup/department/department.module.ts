import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewDepartmenteComponent } from './view-departmente/view-departmente.component';
import { AddDepartmenteComponent } from './add-departmente/add-departmente.component';
import { UpdateDepartmenteComponent } from './update-departmente/update-departmente.component';



@NgModule({
  declarations: [
    ViewDepartmenteComponent,
    AddDepartmenteComponent,
    UpdateDepartmenteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DepartmentModule { }
