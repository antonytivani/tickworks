import { Component, OnInit } from '@angular/core';
import { Carousel } from 'src/app/models/carousel';
import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  carousels: Carousel[];

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.carouselService.getCarousels().subscribe((carousels) => {
      this.carousels = carousels;
    });
  }
}
