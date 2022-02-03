import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forthpage',
  templateUrl: './forthpage.component.html',
  styleUrls: ['./forthpage.component.css'],
})
export class ForthpageComponent implements OnInit {
  carName: string = 'EcoSport';
  maker: string = 'ford';
  type: string = 'SUV';
  weight: string = '1000kg';
  enginePower: string = '2500cc';
  fuelType: string = 'Diesel';
  maxSpeed: number = 220;
  imagePath: string = '/assets/images/Ecosport.jpg';
  variants: string[] = ['Base Model', 'Top Model', 'Ultra Top Model'];
  showVehicalInfo: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  display():void{
    if(this.showVehicalInfo){
      this.showVehicalInfo=false;
    }else{
      this.showVehicalInfo=true
    }
  }
}

