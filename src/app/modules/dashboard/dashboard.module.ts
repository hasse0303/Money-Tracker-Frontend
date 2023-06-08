import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedMaterialModule } from 'src/app/shared/modules/shared-material/shared-material.module';
import { SharedComponentModule } from 'src/app/shared/component/shared-component.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule,
    SharedComponentModule
  ]
})
export class DashboardModule { }
