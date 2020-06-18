import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Carousel } from '../models/carousel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class CarouselService {
  carouselsUrl: string = `./assets/mockdata/carousel.json`;

  constructor(private http: HttpClient) {}

  getCarousels(): Observable<Carousel[]> {
    return this.http.get<Carousel[]>(this.carouselsUrl);
  }
}
