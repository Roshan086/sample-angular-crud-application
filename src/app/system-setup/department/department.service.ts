import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PaginationResponse } from 'src/app/util/PaginationResponse';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseURL = 'http://localhost:8080/department';
  
  httpHeader = {
    headers: new HttpHeaders(
      { 
        'Content-Type': 'application/json'
      }
    )
  };
  
  constructor(private http:HttpClient) { }

  getAllWithPagination(body: any): Observable<PaginationResponse>{
    console.log(body);
    return this.http.post(`${this.baseURL}`+'/getAllDepartments',body,this.httpHeader);
  }

}
