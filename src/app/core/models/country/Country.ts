import { Currency } from './Currency';
import { Language } from './Language';
import { Region } from './Region';
import { RegionalBloc } from './RegionalBloc';
import { Translations } from './Translations';

export interface Country {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: Region;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number | null;
  gini: number | null;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: null | string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  regionalBlocs: RegionalBloc[];
  cioc: null | string;
}
