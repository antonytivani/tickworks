import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { JsonException } from '@angular-devkit/core';


@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService,
              private cartService: CartService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addProductToCart(product: Product) {
    // console.log('adding product ' + JSON.stringify(product));
    this.cartService.addProduct(product);
  }
}
