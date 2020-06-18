import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { Services } from 'src/app/models/service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Services[];

  constructor(private serviceService: ServiceService) {}

  ngOnInit() {
    this.serviceService.getServices().subscribe((services) => {
      this.services = services;
    });
  }
}
