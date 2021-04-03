import { Acronym } from './Acronym';
import { Name } from './Name';
import { OtherAcronym } from './OtherAcronym';
import { OtherName } from './OtherName';

export interface RegionalBloc {
  acronym: Acronym;
  name: Name;
  otherAcronyms: OtherAcronym[];
  otherNames: OtherName[];
}
