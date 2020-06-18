import { Component, OnInit } from '@angular/core';
import { Testimonials } from 'src/app/models/testimonial';
import { TestimonialsService } from 'src/app/services/testimonials';

@Component({
  selector: 'app-what-people-say',
  templateUrl: './what-people-say.component.html',
  styleUrls: ['./what-people-say.component.scss'],
})
export class WhatPeopleSayComponent implements OnInit {
  testimonials: Testimonials[];

  constructor(private testimonialService: TestimonialsService) {}

  ngOnInit() {
    this.testimonialService.getTestimonials().subscribe((testimonials) => {
      this.testimonials = testimonials;
    });
  }
}
