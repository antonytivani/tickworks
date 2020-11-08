import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from "ngx-toastr";

import { JsonException } from '@angular-devkit/core'


@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {

  products: Product[];
  
  //
  
  // track currect product
  currentProduct: Product
  imageUri: String

  constructor(private productService: ProductService,
              private cartService: CartService,
              private toastr: ToastrService,
              
              ) {

              }

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  setCurProduct(curProd: Product){
    this.currentProduct = curProd
    // 
    // this.imageUri = this.product.image
    console.log(this.currentProduct);

    console.log('curProd exist');
    
    
    
  }

  // addProductToCart(product: Product) {
  //   this.cartService.addProduct(product);
  //   this.showSuccess(`${product.name} added to cart`)
  //   // this.basicModal.hide()
  // }

  handleSelectChange(e){
    // this.product.quantity = e.target.options.selectedIndex    
    // this.selected = e.target.options.selectedIndex
  }

  showSuccess(msg: string){
    this.toastr.success(msg.toUpperCase())
  }

  
}
