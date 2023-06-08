import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumb: string = ''
  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
  this.router.data.subscribe(data => {
    this.breadcrumb = data['breadcrumb'];
  });

  }

}
