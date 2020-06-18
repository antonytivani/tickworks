import { Component, OnInit } from '@angular/core';
import { ArrivalService } from 'src/app/services/arrival.service';
import { Arrivals } from 'src/app/models/arrival';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss'],
})
export class NewArrivalsComponent implements OnInit {
  arrivals: Arrivals[];

  constructor(private arrivalService: ArrivalService) {}

  ngOnInit() {
    this.arrivalService.getArrivals().subscribe((arrivals) => {
      this.arrivals = arrivals;
    });
  }
}
