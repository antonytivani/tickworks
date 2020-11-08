import { Component, OnInit } from '@angular/core';
import { MultiCarousel } from 'src/app/models/multi-carousel';
import { MultiCarouselService } from 'src/app/services/multi-carousel';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.scss'],
})
export class MultiItemCarouselComponent implements OnInit {
  // cards: MultiCarousel[];
  
  currentProduct: Product

  constructor(private multiCarouselService: MultiCarouselService,
              private cartService: CartService) {}

  cards = [
    {
      image: '../../../assets/images/shop/leather-belt.png',
      name: 'Tevise',
      price: 999.00,
      quantity : 1
    },
    {
      image: '../../../assets/images/shop/5.png',
      name: 'Curren 8329',
      price: 699.00,
      quantity : 1
    },
    {
      image: '../../../assets/images/shop/new-3.png',
      name: 'Curren 8301',
      price: 599.00,
      quantity : 1
    },
    {
      image: '../../../assets/images/shop/watch_011.png',
      name: 'Curren 000',
      price: 599.00,
      quantity : 1
    },
    {
      image: '../../../assets/images/watch6.png',
      name: 'Title',
      price: 1200,
      quantity : 1
    },
    {
      image: '../../../assets/images/watch7.png',
      name: 'Title',
      price: 1200,
      quantity : 1
    },
    {
      image: '../../../assets/images/watch6.png',
      name: 'Title',
      price: 1200,
      quantity : 1
    },
    {
      image: '../../../assets/images/watch7.png',
      name: 'Title',
      price: 1200,
      quantity : 1
    },
  ];

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  ngOnInit() {
    this.slides = this.chunk(this.cards, 4);
  }
  
  setCurProduct(curProd: Product){
    this.currentProduct = curProd
  }

}
