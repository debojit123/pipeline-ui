import { Injectable } from '@angular/core';
import { Employee } from '../model/employee';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployyServiceService {

  employees : Employee [] = []
  emp: Employee = new Employee()
  data  = [];
  constructor(private http : HttpClient) { }

  getEmployeeList()
  {
    const url = "http://localhost:8080/list";
    
    this.http.get<Employee[]>(url).subscribe(
      (res:Employee[])=>{
        res.forEach(item=>{
          const e : Employee = new Employee();
          e.id = item.id;
          e.name = item.name;
          e.dept = item.dept;
          this.employees.push(e);
        })
      }
    );

    return this.employees;
  }

  saveEmployee(e:Employee){
    const url = "http://localhost:8080/emloyee";

    this.http.post<Employee>(url,e).subscribe((res : Employee)=>{
      this.emp.id = res.id;
      this.emp.name  = res.name;
      this.emp.dept = res.dept;
    });

    return this.emp;
  }

  

}
