import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckOutComponent implements OnInit {
  elements: any = [
    { id: 'Watch one', first: 'Mark', last: '1', handle: 'R1200.00', remove: 'X' },
    { id: 'Watch two', first: 'Jacob', last: '2', handle: 'R1200.00', remove: 'X' },
    { id: 'Watch three', first: 'Larry', last: '3', handle: 'R1200.00', remove: 'X' },
  ];

  headElements = ['Product name', 'Product', 'Quantity', 'Price', 'Remove'];
  constructor() {}

  ngOnInit(): void {}
}
