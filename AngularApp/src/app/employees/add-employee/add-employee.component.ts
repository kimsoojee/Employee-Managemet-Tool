import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../service/employee.model';
// import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { NgForm } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('closeBtn') closeBtn: ElementRef;
  @Output() refreshData = new EventEmitter<any>();
  @Output() resetForm = new EventEmitter<any>();

  constructor( public service: EmployeeService ) { }

  ngOnInit(): void {
    this.resetForm.emit();
  }

  onSubmit(form: NgForm){
    this.insertRecord(form);
    // console.log(form.value);
  }

  insertRecord(form: NgForm){
    this.service.addEmployee(form.value).subscribe(
      res => { this.resetForm.emit(form); this.refreshData.emit()},
      err => console.error('Got an error: ' + err),
      () => {console.log('Got a complete notification'); this.closeModal();}
    )
  }

  closeModal(): void {
    this.closeBtn.nativeElement.click();
  }
}