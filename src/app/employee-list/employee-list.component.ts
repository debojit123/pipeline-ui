import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { EmployyServiceService } from '../service/employy-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee [] = [];
  constructor(private employeeService : EmployyServiceService, private router : Router) { }

  ngOnInit(): void {

    this.employees = this.employeeService.getEmployeeList();

  }

}
