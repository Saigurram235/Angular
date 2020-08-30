import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  // Example for Interpolution binding

    // name:string='My name is Sai';
    // age:number=25;
    // salary:number = 30000;
    // v1:number = 30;
    // v2:number = 20;
    // date = new Date();

  // Example for Property binding

    // value1:string = 'Sai';
    // v2:string = 'Hello';

// Example for Attribut binding

  // num:number = 2;


// Example for Event binding

  // valc:any = '';
  // myfunc(){
  //   console.log('This function is running sussesfully');
  //   this.valc = 'This is Event Binding';
  // }


// Example for Two way binding binding

// text:any = "submit";


// showdata:any = "";

// myfunc(name){
//   this.showdata = name;
// }

// This NgStyle adding css ts file example

// mystyle = {
//   'font-size':'100px',
//   'color':'red',
//   'width':'auto'
// }

// This NgClass adding css in css file and adding object ts file example

// myclass = {
//   'myfont':true,
//   'mysty':true,
// }

// Structural Directives Sub part ngIf

// department:string = "angular";

// Structural Directives Sub part ngFor

// employee:any[]=[
//   {id:1, 'name':'Sai', 'age':'21', 'email':'sai@gmail.com'},
//   {id:2, 'name':'Sunny', 'age':'22', 'email':'sunny@gmail.com'},
//   {id:3, 'name':'chintu', 'age':'51', 'email':'chintu@gmail.com'},
//   {id:4, 'name':'ravi', 'age':'28', 'email':'ravi@gmail.com'},
//   {id:5, 'name':'nani', 'age':'31', 'email':'nani@gmail.com'},
// ]

// Structural Directives Sub part ngSwitch

// name:any = "sai";

// server side routing

// constructor(private router:Router){}

// homepage(){
//   this.router.navigate(['./home'])
// }

// aboutpage(){
//   this.router.navigate(['./aboutus'])
// }

// pipe

// v1:string = "develop pipe Angualr In This Class"

// var1:string = "Component is the basic building block of angular, which means angular application is a collection of components and one component is responsible to handle one view or part of view A component encapsulates the data, the HTML and the logic for a view. You can create as many components as required. Component is a simple typescript class which contains, typescript class, html template/template url and @component decorator with metadata When we develop a website, it has different different pages like home, about, contact etc. so every page we create a component and combine hole or all component we develop a website or portal";

// var1 = new Date(1998, 9, 26);

// today: number = Date.now();

// var2:number = 85.2258246587;

}
