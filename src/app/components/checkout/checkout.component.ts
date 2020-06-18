import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckOutComponent implements OnInit {
  elements: any = [
    { id: 'Watch one', first: 'Mark', last: '1', handle: 'R1200.00' },
    { id: 'Watch two', first: 'Jacob', last: '2', handle: 'R1200.00' },
    { id: 'Watch three', first: 'Larry', last: '3', handle: 'R1200.00' },
  ];

  headElements = ['Product name', 'Product', 'Quantity', 'Price'];
  constructor() {}

  ngOnInit(): void {}
}
