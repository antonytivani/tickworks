import { Component, OnInit, OnChanges, ViewChild, } from '@angular/core';
import { MDBModalRef } from "ng-uikit-pro-standard";

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { inputNames } from '@angular/cdk/schematics';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  selected: number;
  product: Product

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService,
    public modalRef: MDBModalRef
  ) {}

  ngOnInit(): void {}

  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
    this.showSuccess(`${product.name}`);
    this.modalRef.hide()
  }

  // incr product.quantity if change event detected on select element
  handleSelectChange(e) {
    this.product.quantity = e.target.options.selectedIndex;
    this.selected = e.target.options.selectedIndex;
    console.log(this.selected);
    
  }

  showSuccess(msg: string) {
    this.toastr.success('added to cart', msg.toUpperCase(), {
      closeButton: true,
    });
  }
}
