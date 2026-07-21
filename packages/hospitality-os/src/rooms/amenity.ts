export type AmenityScopeType = 'IN_ROOM' | 'PROPERTY_WIDE' | 'VIP_EXCLUSIVE';

export interface Amenity {
  readonly amenityId: string;
  readonly uniqueAmenityCode: string; // e.g. "AMN-MINIBAR-PREM"
  readonly amenityDisplayName: string;
  readonly amenityScope: AmenityScopeType;
  readonly physicalLocationDetails?: string;
  readonly additionalDailyChargeAmount: number; // e.g. $25.00 for premium espresso bar access
  readonly itemRestockFrequencyDaysCount?: number;
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
