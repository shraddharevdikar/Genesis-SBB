export interface Country {
  readonly countryId: string;
  readonly isoAlpha2Code: string; // e.g. "CH", "DE"
  readonly isoAlpha3Code: string; // e.g. "CHE", "DEU"
  readonly displayName: string;
  readonly defaultCurrencyCode: string; // e.g. "CHF"
  readonly regulatoryAuthorityNameString?: string;
}
