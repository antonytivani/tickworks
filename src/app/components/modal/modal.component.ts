import { Component, OnInit, OnChanges, Input, ViewChild, SimpleChanges } from '@angular/core';
// import { MDBModalRef } from "ng-uikit-pro-standard";

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { inputNames } from '@angular/cdk/schematics';

import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnChanges {
  selected: number;

  @Input() product: Product;
  @ViewChild(ModalDirective) basicModal: ModalDirective;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  // =============================
  // comment here
  // =============================

  ngOnChanges(): void {
    if (this.product) {
      this.basicModal.show();
    }
  }

  //==============================

  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
    this.showSuccess(`${product.name}`);
    this.basicModal.hide();
  }

  // incr product.quantity if change event detected on select element
  handleSelectChange(e) {
    this.product.quantity = e.target.options.selectedIndex;
    this.selected = e.target.options.selectedIndex;
  }

  showSuccess(msg: string) {
    this.toastr.success('added to cart', msg.toUpperCase(), {
      closeButton: true,
    });
  }
}
