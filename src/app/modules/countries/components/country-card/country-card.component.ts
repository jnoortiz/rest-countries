import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Country } from '@core/models/country';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryCardComponent {
  @Input() country!: Country; // this can never be null

  constructor() {}
}
