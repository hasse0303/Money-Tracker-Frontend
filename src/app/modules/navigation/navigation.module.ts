import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationComponent } from './navigation.component';
import { SharedMaterialModule } from 'src/app/shared/modules/shared-material/shared-material.module';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    SharedMaterialModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
