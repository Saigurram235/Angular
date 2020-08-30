import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { SaiModule } from '../sai/sai.module';



@NgModule({
  declarations: [StudentComponent],
  imports: [
    CommonModule,
    SaiModule
  ],

  exports:[
    StudentComponent
  ]
})
export class SbranchModule { }
