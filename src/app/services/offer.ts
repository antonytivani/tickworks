import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Offers } from '../models/offer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class OfferService {
  offersUrl: string = `./assets/mockdata/offer.json`;

  constructor(private http: HttpClient) {}

  getOffers(): Observable<Offers[]> {
    return this.http.get<Offers[]>(this.offersUrl);
  }
}
