import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsComponent } from './lists.component';
import { SharedComponentModule } from 'src/app/shared/component/shared-component.module';
import { SharedMaterialModule } from 'src/app/shared/modules/shared-material/shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedMaterialModule,
    SharedComponentModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListsModule { }
