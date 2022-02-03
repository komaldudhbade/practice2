import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectcomp',
  templateUrl: './objectcomp.component.html',
  styleUrls: ['./objectcomp.component.css'],
})
export class ObjectcompComponent implements OnInit {
  fruitObject: any = {
    fruitName: 'Apple',
    fruitPrize: 70,
    fruitColor: 'Red',
    fruitImage: '/assets/images/apple.jpg',
    fruitDiscount: 0,
    fruitPrizeAfterDiscount: 70,
  };

  constructor() {}

  ngOnInit(): void {}
  calculatePrizeAfterDiscount(fruitObject: any): void {
    fruitObject.fruitPrizeAfterDiscount =
      fruitObject.fruitPrize -
      (fruitObject.fruitPrize * fruitObject.fruitDiscount) / 100;
  }
}
