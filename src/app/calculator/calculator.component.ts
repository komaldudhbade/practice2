import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public firstInput:number=0;
  public secondInput:number=0;
  public result:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  addition():void{
    this.result=this.firstInput+this.secondInput;
  };
  substraction():void{
    this.result=this.firstInput-this.secondInput;
  };
  multiplication():void{
    this.result=this.firstInput*this.secondInput;
  };
  division():void{
    this.result=this.firstInput/this.secondInput;
  };


}
