import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'Cal';

  // currentNumber = '0';
  // firstOperand = null;
  // operator = null;
  // waitForSecondNumber = false;

  // constructor() { }

  // ngOnInit() {
  // }

  // public getNumber(v: string){
  //   console.log(v);
  //   if(this.waitForSecondNumber)
  //   {
  //     this.currentNumber = v;
  //     this.waitForSecondNumber = false;
  //   }else{
  //     this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

  //   }
  // }

  // getDecimal(){
  //   if(!this.currentNumber.includes('.')){
  //       this.currentNumber += '.'; 
  //   }
  // }

  // private doCalculation(op , secondOp){
  //   switch (op){
  //     case '+':
  //     return this.firstOperand += secondOp; 
  //     case '-': 
  //     return this.firstOperand -= secondOp; 
  //     case '*': 
  //     return this.firstOperand *= secondOp; 
  //     case '/': 
  //     return this.firstOperand /= secondOp; 
  //     case '=':
  //     return secondOp;
  //   }
  // }
  // public getOperation(op: string){
  //   console.log(op);

  //   if(this.firstOperand === null){
  //     this.firstOperand = Number(this.currentNumber);

  //   }else if(this.operator){
  //     const result = this.doCalculation(this.operator , Number(this.currentNumber))
  //     this.currentNumber = String(result);
  //     this.firstOperand = result;
  //   }
  //   this.operator = op;
  //   this.waitForSecondNumber = true;

  //   console.log(this.firstOperand);
 
  // }

  // public clear(){
  //   this.currentNumber = '0';
  //   this.firstOperand = null;
  //   this.operator = null;
  //   this.waitForSecondNumber = false;
  // } 
  
  value:any;

 
  public dis(val:any)
  {
    String :((<HTMLInputElement>document.getElementById("result")).value)+=val
  }

  public solve()
  {
    let x = String((<HTMLInputElement>document.getElementById("result")).value)
    let y = eval(x)
    String :((<HTMLInputElement>document.getElementById("result")).value) = y
  }
  
  public back(){
    var value = String((<HTMLInputElement>document.getElementById("result")).value)
    String:((<HTMLInputElement>document.getElementById("result")).value) = value.substr(0,value.length-1)
  }

  public clr()
  {
    String :((<HTMLInputElement>document.getElementById("result")).value) = " "
  }
}
