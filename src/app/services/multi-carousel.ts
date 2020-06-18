import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { MultiCarousel } from '../models/multi-carousel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class MultiCarouselService {
  multicarouselsUrl: string = `./assets/mockdata/multi-carousel.json`;

  constructor(private http: HttpClient) {}

  getMultiCarousels(): Observable<MultiCarousel[]> {
    return this.http.get<MultiCarousel[]>(this.multicarouselsUrl);
  }
}
