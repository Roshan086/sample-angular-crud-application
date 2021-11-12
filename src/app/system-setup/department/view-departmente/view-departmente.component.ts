import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationParams } from 'src/app/util/PaginationParams';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-view-departmente',
  templateUrl: './view-departmente.component.html',
  styleUrls: ['./view-departmente.component.css']
})
export class ViewDepartmenteComponent implements OnInit {

  departments: Department [] = [];

  paginationParams : PaginationParams = new PaginationParams();

  constructor(private departmentService: DepartmentService,private router : Router) { }

  ngOnInit(): void {
    this.getAllDepartmentsWithPagination(this.paginationParams);

  }

  getAllDepartmentsWithPagination(params:any){
    this.departmentService.getAllWithPagination(params).subscribe(response =>{
      this.paginationParams.totalItems = response.totalElements;
      this.departments = response.data;
    });
  }

}
