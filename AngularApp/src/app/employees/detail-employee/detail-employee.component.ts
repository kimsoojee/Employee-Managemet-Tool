import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {

  EmployeeInfo;
  constructor(private route: ActivatedRoute) { 
  }
 
  ngOnInit(): void {
    this.EmployeeInfo = this.route.snapshot.params;
  }


}
