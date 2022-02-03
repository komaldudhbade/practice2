import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css'],
})
export class FirstpageComponent implements OnInit {
  firstName: string = 'Arya';
  id: number = 123;
  cityName: string = 'Pune';
  imagePath: string = 'assets/images/student.jpg';
  stateArray: string[] = [
    'Andraparadesh',
    'Bihar',
    'Maharashtra',
    'Gujrat',
    'Madhyapradesh',
    'Karnataka',
    'Tamilnadu',
    'JK',
    'Aasam',
    'MH1',
    'MH2',
    'MH3',
    'MH4',
  ];
  showStudentTable: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  display(): void {
    if (this.showStudentTable == true) {
      this.showStudentTable = false;
    } else {
      this.showStudentTable = true;
    }
  }
}
