import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from "ng-uikit-pro-standard";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit(): void {
  }

}
