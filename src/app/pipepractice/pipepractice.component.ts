import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipepractice',
  templateUrl: './pipepractice.component.html',
  styleUrls: ['./pipepractice.component.css']
})
export class PipepracticeComponent implements OnInit {
  public dob:Date=(new Date());
  public name:string='Komal';
  public price:number=1200;
  public grade:number=150;
  public myNumber:number=1.20000000;
 
  constructor() {
    this.dob.setDate(this.dob.getDate() + 1);
   }

  ngOnInit(): void {
  }

}
