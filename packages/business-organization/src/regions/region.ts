export type RegionalTierCode =
  | 'GLOBAL'
  | 'REGIONAL'
  | 'COUNTRY'
  | 'LOCAL';

export interface Region {
  readonly regionId: string;
  readonly tier: RegionalTierCode;
  readonly name: string;
  readonly descriptionText: string;
}
