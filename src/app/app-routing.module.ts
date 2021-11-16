import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  /*{
    path:'department',
    component:ViewDepartmenteComponent,
  },
  {
    path:'addDepartment',
    component:AddDepartmentComponent,
  },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
