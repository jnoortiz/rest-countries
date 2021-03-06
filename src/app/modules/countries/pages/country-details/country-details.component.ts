import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCountryDetails();
  }

  onClickBorderCountry(countryCode: string): void {
    this.country = undefined;
    this.router.navigate(['/countries', countryCode]).then(() => {
      this.getCountryDetails();
    });
  }

  private getCountryDetails(): void {
    const countryCode = this.route.snapshot.params.countryCode;
    this.countryService.getCountryByCode(countryCode).subscribe((country) => {
      this.country = country;
      this.borderCountries = [];
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
