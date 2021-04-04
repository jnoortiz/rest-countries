import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '@core/http/country.service';
import { Country } from '@core/models/country';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  borderCountries?: { countryCode: string; getCountryName: Observable<string> }[] = [];
  country?: Country;

  constructor(private countryService: CountryService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const countryCode = this.route.snapshot.params.countryCode;
    this.countryService.getCountryByCode(countryCode).subscribe((country) => {
      this.country = country;
      this.country.borders.forEach((countryCode) => {
        this.borderCountries?.push({
          countryCode,
          getCountryName: this.getCountryName(countryCode),
        });
      });
    });
  }

  private getCountryName(countryCode: string): Observable<string> {
    return this.countryService.getCountryByCode(countryCode).pipe(map((country) => country.name));
  }
}
