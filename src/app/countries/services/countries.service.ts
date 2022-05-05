import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Country, CountrySmall } from '../interfaces/country.interface';
import { environment } from 'src/environments/environment';

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

  getCountryByAlphaCode(code: string): Observable<Country | null> {
    if (!code) { return of(null) };
    const url = `${this._baseUrl}/alpha/${code}`;
    return this.http.get<Country>(url);
  }
  
  getCountryBySmall(code: string): Observable<CountrySmall> {
    const url = `${this._baseUrl}/alpha/${code}?fields=alpha3Code;name`;
    return this.http.get<CountrySmall>(url);
  }
}
