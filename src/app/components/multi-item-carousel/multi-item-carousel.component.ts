import { Component, OnInit } from '@angular/core';
import { MultiCarousel } from 'src/app/models/multi-carousel';
import { MultiCarouselService } from 'src/app/services/multi-carousel';

@Component({
  selector: 'app-multi-item-carousel',
  templateUrl: './multi-item-carousel.component.html',
  styleUrls: ['./multi-item-carousel.component.scss'],
})
export class MultiItemCarouselComponent implements OnInit {
  // cards: MultiCarousel[];

  constructor(private multiCarouselService: MultiCarouselService) {}

  cards = [
    {
      image: '../../../assets/images/watch6.png',
      name: 'Title',
      price: '1200',
    },
    {
      image: '../../../assets/images/watch7.png',
      name: 'Title',
      price: '1200',
    },
    {
      image: '../../../assets/images/watch6.png',
      name: 'Title',
      price: '1200',
    },
    {
      image: '../../../assets/images/watch7.png',
      name: 'Title',
      price: '1200',
    },
    {
      image: '../../../assets/images/watch6.png',
      name: 'Title',
      price: '1200',
    },
    {
      image: '../../../assets/images/watch7.png',
      name: 'Title',
      price: '1200',
    },
    {
      image: '../../../assets/images/watch6.png',
      name: 'Title',
      price: '1200',
    },
    {
      image: '../../../assets/images/watch7.png',
      name: 'Title',
      price: '1200',
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
}
