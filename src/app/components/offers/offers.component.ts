import { Component, OnInit } from '@angular/core';
import { Offers } from 'src/app/models/offer';
import { OfferService } from 'src/app/services/offer';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent implements OnInit {
  offers: Offers[];

  constructor(private offerService: OfferService) {}

  ngOnInit() {
    this.offerService.getOffers().subscribe((offers) => {
      this.offers = offers;
    });
  }
}
