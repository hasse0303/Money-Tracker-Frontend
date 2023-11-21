import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  displayedColumns = ['no', 'firstName', 'lastName','action']
  userList: any[] = [];
  total: number = 0;
  max: number = 10;
  offset: number = 0;
  selectedCar: number = 0;

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(params?: HttpParams) {
    this.userService.list(params).subscribe(res => {
      this.userList = res.data;
      this.total = res.total;
    })
  }

  nextPage(event: PageEvent){
    console.log(event);
    this.offset = event.pageSize * event.pageIndex;
    this.max = event.pageSize;
    const params = new HttpParams().set('offset', this.offset).set('max', this.max);
    this.getUsers(params);
  }
}
