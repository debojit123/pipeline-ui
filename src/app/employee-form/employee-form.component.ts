import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployyServiceService } from '../service/employy-service.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(private router:Router, private service:EmployyServiceService) { }

  ngOnInit(): void {
  }
  e : Employee = new Employee();
  onSubmit(form:NgForm){

    if(form.valid)
    {
    this.e.id = form.value.id;
    this.e.name =form.value.empname;
    this.e.dept = form.value.dept;
    
    let e1 = this.service.saveEmployee(this.e);
    
    if(e1 != null)
    {
      this.router.navigateByUrl("")
    }
    console.log(e1);
    }

  }
}
