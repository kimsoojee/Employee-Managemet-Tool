import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../service/employee.model';
import { UpdateEmployeeComponent } from '../update-employee/update-employee.component';
import { Router } from '@angular/router';

import { EmployeeService } from '../service/employee.service';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit{
  @ViewChild(UpdateEmployeeComponent) updateComp: UpdateEmployeeComponent;
  @ViewChild( MatSort ) sort: MatSort;
  @ViewChild( MatPaginator ) paginator: MatPaginator;

    
  displayedColumns: string[] = ['employee_id', 'first_name', 'last_name', 'email', 'phone_number', 'hire_date', 'salary', 'editDelete'];
  
  userInfo: any;
  employees: Employee[]
  dataSource: MatTableDataSource<Employee>;
  selectedColumn = 'employee_id';
  id: number;

  p: number = 1;
  size = 10;
  pageIndex = 0;
  totalLength: number;

  constructor(public service: EmployeeService, private router: Router) {
  }

  ngOnInit(){
    this.refreshData();
  }

  refreshData(){
    this.service.getEmployees().subscribe(res => {
      this.totalLength = (res as Employee[]).length;
      this.dataSource = new MatTableDataSource(res as Employee[]) ;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.changeSortedColumn();
    });
  }


  resetForm(form?: NgForm){
    if (form != null){
      form.resetForm();
    }
    this.service.formData = {
      employee_id: null,
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      hire_date: null,
      job_id: 1000,
      salary: 0,
      manager_id: 1000,
      department_id: 1000
    }
  }

  onDelete(id: number) {
    this.service.deleteEmployee(id).subscribe(res => {this.refreshData();});
  }

  Logout(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  changeSortedColumn(dir?) {
    if (dir == true)
      dir = 'desc';
    else
      dir = 'asc';
    const sortState: Sort = {active: this.selectedColumn, direction: dir};
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState); 
  }
}