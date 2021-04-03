import { Component, OnInit } from '@angular/core';
import { CountryService } from '@core/http/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getCountryList().subscribe((countries) => {
      console.log(countries);
    });
  }
}
