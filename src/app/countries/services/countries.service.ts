import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { CountrySmall } from '../interfaces/country.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private _regions: string[] = ['Africa', 'Americas', 'Europe', 'Asia', 'Oceania'];
  private _baseUrl: string = environment.baseUrl;

  get regions(): string[] {
    return [...this._regions];
  }

  constructor(private http: HttpClient) { }
  
  getCountryByRegion(region: string): Observable<CountrySmall[]> {
    const url = `${this._baseUrl}/region/${region}?fields=name,alpha3Code`;
    return this.http.get<CountrySmall[]>(url);
  }
}
