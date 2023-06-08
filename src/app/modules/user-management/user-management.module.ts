import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { SharedMaterialModule } from 'src/app/shared/modules/shared-material/shared-material.module';
import { SharedComponentModule } from 'src/app/shared/component/shared-component.module';


@NgModule({
  declarations: [
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    SharedComponentModule,
    SharedMaterialModule
  ]
})
export class UserManagementModule { }
