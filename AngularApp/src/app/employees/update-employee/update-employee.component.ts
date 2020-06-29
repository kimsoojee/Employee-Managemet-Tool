import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../service/employee.model';
import { MatTableDataSource } from '@angular/material/table';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @Output() refreshData = new EventEmitter<any>();
  @Output() resetForm = new EventEmitter<any>();

  constructor(public service: EmployeeService ) { }

  ngOnInit(): void {
    this.resetForm.emit();
  }

  onSubmit(form: NgForm){
    this.updateRecord(form);
    this.service.getEmployees().subscribe(res => {
      this.refreshData.emit() ;  
    });
  }

  updateRecord(form: NgForm){
    this.service.updateEmployee(form.value).subscribe(
      res => { this.resetForm.emit(form); },
      err => console.error('Got an error: ' + err),
      () => {this.closeModal(); console.log('Got a complete notification');}
    )
  }

  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  closeModal(): void {
    this.closeBtn.nativeElement.click();
  }

}
