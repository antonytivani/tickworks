import { Component, OnInit } from '@angular/core';
import { Arrivals } from 'src/app/models/arrival';
import { ArrivalService } from 'src/app/services/arrival.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  arrivals: Arrivals[];

  constructor(private arrivalService: ArrivalService) {}

  ngOnInit() {
    this.arrivalService.getArrivals().subscribe((arrivals) => {
      this.arrivals = arrivals;
    });
  }
}
