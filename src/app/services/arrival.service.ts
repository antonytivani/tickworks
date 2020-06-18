import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Arrivals } from '../models/arrival';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class ArrivalService {
  arrivalsUrl: string = `./assets/mockdata/arrival.json`;

  constructor(private http: HttpClient) {}

  getArrivals(): Observable<Arrivals[]> {
    return this.http.get<Arrivals[]>(this.arrivalsUrl);
  }
}
