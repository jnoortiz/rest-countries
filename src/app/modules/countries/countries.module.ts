import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';

@NgModule({
  declarations: [CountryListComponent, CountryDetailsComponent],
  imports: [SharedModule, CountriesRoutingModule],
})
export class CountriesModule {}
