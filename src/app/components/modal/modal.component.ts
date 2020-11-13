import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from "ng-uikit-pro-standard";
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  selectedQuantity: number;
  product: Product

  constructor(
    private cartService: CartService,
    private toastr: ToastrService,
    public modalRef: MDBModalRef
  ) { }

  ngOnInit(): void {}

  addProductToCart(product: Product) {

    if (!this.cartService.cart.includes(product)) {
      product.quantity = this.selectedQuantity;
      this.cartService.addProduct(product);
    } else {
      for (let i = 0; i < this.cartService.cart.length; i++) {
        if (this.cartService.cart[i].name === this.product.name) {
          this.cartService.cart[i].quantity += this.selectedQuantity
          break
        } 
      }
    }

    // hide modal
    this.modalRef.hide();

    // open Toastr
    this.showSuccess(`${product.name}`);
  }

  // incr product.quantity if change event detected on select element
  handleSelectChange(e) {
    this.selectedQuantity = e.target.options.selectedIndex;
  }

  showSuccess(msg: string) {
    this.toastr.success('added to cart', msg.toUpperCase(), {
      closeButton: true,
    });
  }
}
