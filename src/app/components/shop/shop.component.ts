import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  products: Product[];
  currentProduct: Product

  constructor(private productService: ProductService,
              private toastr: ToastrService,
              private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addProductToCart(product: Product) {
    console.log('adding product ' + JSON.stringify(product));
    this.cartService.addProduct(product);
    this.showSucess(`${product.name} added to cart`)
  }

  showSucess(msg: string){
    this.toastr.success(msg.toUpperCase())
  }
  setCurProduct(curProd: Product){
    this.currentProduct = curProd
    console.log(this.currentProduct);  
  }
}
