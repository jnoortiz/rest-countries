import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { CountryDetailsComponent } from './pages/country-details/country-details.component';
import { CountryCardComponent } from './components/country-card/country-card.component';

@NgModule({
  declarations: [CountryListComponent, CountryDetailsComponent, CountryCardComponent],
  imports: [SharedModule, CountriesRoutingModule],
})
export class CountriesModule {}
