import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { Services } from '../models/service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class ServiceService {
  servicesUrl: string = `./assets/mockdata/service.json`;

  constructor(private http: HttpClient) {}

  getServices(): Observable<Services[]> {
    return this.http.get<Services[]>(this.servicesUrl);
  }
}
