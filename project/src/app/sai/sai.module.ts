import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sai1Component } from './sai1/sai1.component';



@NgModule({
  declarations: [Sai1Component],
  imports: [
    CommonModule
  ],
  exports:[
    Sai1Component
  ]
})
export class SaiModule { }
