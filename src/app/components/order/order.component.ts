import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent implements OnInit {
  private showAlert: boolean = false;
  @ViewChild('alert', { static: true }) alert: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  openAlert() {
    this.showAlert = true;
  }
  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
  }
}
