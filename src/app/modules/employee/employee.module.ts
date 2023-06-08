import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeRoutesModule } from './employee-routing.module';
import { SharedMaterialModule } from 'src/app/shared/modules/shared-material/shared-material.module';
import { SharedComponentModule } from 'src/app/shared/component/shared-component.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutesModule,
    SharedMaterialModule,
    SharedComponentModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
