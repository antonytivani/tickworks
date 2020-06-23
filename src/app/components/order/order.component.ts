import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  @ViewChild('alert', { static: false }) alert: ElementRef;

  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }

  constructor() {}

  ngOnInit(): void {}
}
