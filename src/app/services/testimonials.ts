import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Testimonials } from '../models/testimonial';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class TestimonialsService {
  testimonialsUrl: string = `./assets/mockdata/testimonial.json`;

  constructor(private http: HttpClient) {}

  getTestimonials(): Observable<Testimonials[]> {
    return this.http.get<Testimonials[]>(this.testimonialsUrl);
  }
}
