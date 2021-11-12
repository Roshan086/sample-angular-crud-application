import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewDepartmenteComponent } from './system-setup/department/view-departmente/view-departmente.component';
import { ViewEmployeeComponent } from './system-setup/employee/view-employee/view-employee.component';

const routes: Routes = [

  {
    path:'employee',
    component:ViewEmployeeComponent,
  },
  {
    path:'department',
    component:ViewDepartmenteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
