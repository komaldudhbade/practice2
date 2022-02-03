import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.css'],
})
export class SecondpageComponent implements OnInit {
  fruitName: string = 'Mango';
  fruitColor: string = 'Green';
  weight: string = '1kg';
  prize: number = 20;
  image: string = 'assets/images/Raw_Mango.jpg';
  availnInState: string[] = [
    'State1',
    'State2',
    'State3',
    'State4',
    'State5',
    'State6',
  ];
  height: number = 150;
  width: number = 150;
  showFruitTable: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  display(): void {
    if (this.showFruitTable == true) {
      this.showFruitTable = false;
    } else {
      this.showFruitTable = true;
    }
  }
}
