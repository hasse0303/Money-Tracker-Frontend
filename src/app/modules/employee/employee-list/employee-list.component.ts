import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { EmployeeService } from 'src/app/shared/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  displayedColumns = ['no', 'name', 'gender', 'dob', 'email', 'position','action'];
  employeeList: any[] = [];
  searchForm = new FormControl('');
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
    this.searchEmployee()
  }

  getEmployees(name?: string) {
    let params;
    name && (params = new HttpParams().set('name', name));
    this.employeeService.list(params).subscribe(res => {
      this.employeeList = res.data;
    })
  }

  searchEmployee() {
    this.searchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      if (value) {
        this.getEmployees(value);
        return;
      }
      this.getEmployees();
    })
  }
}
