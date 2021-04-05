import { Component, OnInit } from '@angular/core';
import { CountryService } from '@core/http/country.service';
import { Country, Region } from '@core/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  countryList: Country[] = [];
  regionOptions: Region[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.initRegionOptions();
    this.countryService.getCountryList().subscribe((countries) => (this.countryList = countries));
  }

  private initRegionOptions() {
    const excludedRegions = ['Empty', 'Polar'];
    const regionKeys = Object.keys(Region) as (keyof typeof Region)[];
    regionKeys.forEach((key) => {
      if (!excludedRegions.includes(key)) this.regionOptions.push(Region[key]);
    });
  }
}
