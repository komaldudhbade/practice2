import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.css']
})
export class ThirdpageComponent implements OnInit {
  firstName:string='Shital';
  lastName:string='Dudhbade';
  age:number=27;
  address:string='Wardha';
  emailId:string='shital.dudhbade@gmail.com';
  customerId:number=123456;
  accountNumber:number=4569712563;
  customerMobileNo:number=9960890942;
  imagePath:string='assets/images/bank_customer.jpg';
  amount:number=5236;
  customerLocation:string[]=[
    'Select','Kharadi','Wagholi','Hinjewadi','Wakad','Yerwada','Bundgarden','KalyaniNagar','Manjari','Hdapsar',
    'Sanagavi'
  ];
  showCustomerDetails:boolean=true;

  

  constructor() { }

  ngOnInit(): void {
  };
  display():void{
    if(this.showCustomerDetails){
      this.showCustomerDetails=false;
    }else{
      this.showCustomerDetails=true
    }
  }

}
