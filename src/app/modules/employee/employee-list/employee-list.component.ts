import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
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
  total: number = 0;
  offset: number = 0;
  max: number = 10;
  constructor(
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.getEmployees();
    this.searchEmployee()
  }

  getEmployees(params?: HttpParams) {
    this.employeeService.list(params).subscribe(res => {
      this.employeeList = res.data;
      this.total = res.total;
    })
  }

  searchEmployee() {
    this.searchForm.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(value => {
      if (value) {
        const params = new HttpParams().set('name', value);
        this.getEmployees(params);
        return;
      }
      this.getEmployees();
    })
  }

  nextPage(event: PageEvent){
    this.offset = event.pageSize * event.pageIndex;
    this.max = event.pageSize;
    const params = new HttpParams().set('offset', this.offset).set('max', this.max);
    this.getEmployees(params);
  }
}
