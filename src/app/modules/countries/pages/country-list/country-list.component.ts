import { Component, OnInit } from '@angular/core';
import { CountryService } from '@core/http/country.service';
import { Country } from '@core/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countryList: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountryList().subscribe((countries) => (this.countryList = countries));
  }
}
