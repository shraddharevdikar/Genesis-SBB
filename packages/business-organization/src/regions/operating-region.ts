import { Region } from './region.js';
import { Country } from './country.js';

export interface OperatingRegion {
  readonly operatingRegionId: string;
  readonly baseRegionRef: Region;
  readonly countriesCoveredList: Country[];
  readonly leadExecutiveParticipantId: string;
  readonly localizedTaxJurisdictionCode: string;
}
