import { Injectable } from '@angular/core';

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

  constructor() { }

}
