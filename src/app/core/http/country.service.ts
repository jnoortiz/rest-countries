import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { Country } from '@core/models/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getCountryList(): Observable<Country[]> {
    return this.http.get(`${environment.countriesApiUrl}/all`) as Observable<Country[]>;
  }
}
