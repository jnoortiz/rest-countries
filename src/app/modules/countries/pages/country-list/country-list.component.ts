import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountryService } from '@core/http/country.service';
import { Country, Region } from '@core/models/country';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit, OnDestroy {
  countryFilterForm!: FormGroup;
  countryList: Country[] = [];
  regionFilterItems: Region[] = [];

  private completeCountryList: Country[] = [];
  private unsubscribe: Subject<any> = new Subject();

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.initCountryFilterForm();
    this.initRegionFilterItems();
    // initial
    this.countryService
      .getCountryList()
      .subscribe((countries) => (this.completeCountryList = this.countryList = countries));
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.unsubscribe();
  }

  private initCountryFilterForm(): void {
    this.countryFilterForm = new FormGroup({
      countryName: new FormControl(null),
      region: new FormControl(null),
    });

    // subscribe to country name input field changes
    this.countryFilterForm
      .get('countryName')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe), debounceTime(200), distinctUntilChanged())
      .subscribe((val) => this.filterCountryList());

    // subscribe to region dropdown changes
    this.countryFilterForm
      .get('region')
      ?.valueChanges.pipe(takeUntil(this.unsubscribe), debounceTime(0)) // debounce(0) https://github.com/angular/angular/issues/13129
      .subscribe((val) => this.filterCountryList());
  }

  private filterCountryList(): void {
    let filteredCountries = this.completeCountryList;
    const formVal = this.countryFilterForm.value;

    // if filterForm is empty then reset the list
    if (!formVal.countryName && !formVal.region) {
      this.countryList = filteredCountries;
      return;
    }

    // if countryName was changed then filter country by name
    if (formVal.countryName) {
      filteredCountries = filteredCountries.filter((country) => {
        return country.name.toLowerCase().includes(formVal.countryName.toLowerCase());
      });
    }

    // if region was changed then filter country by region
    if (formVal.region) {
      filteredCountries = filteredCountries.filter((country) => {
        return country.region.includes(formVal.region);
      });
    }

    this.countryList = filteredCountries;
  }

  private initRegionFilterItems(): void {
    const excludedRegions = ['Empty', 'Polar'];
    const regionKeys = Object.keys(Region) as (keyof typeof Region)[];
    regionKeys.forEach((key) => {
      if (!excludedRegions.includes(key)) this.regionFilterItems.push(Region[key]);
    });
  }
}
