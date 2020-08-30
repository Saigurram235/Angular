import { NgModule } from '@angular/core';
import { SbranchModule } from '../sbranch/sbranch.module';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [ChildComponent],

  imports:[
    CommonModule,
    SbranchModule
  ],

  exports:[
    ChildComponent
  ]
})
export class NewschoolModule { }
