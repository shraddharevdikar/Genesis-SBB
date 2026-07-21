export type DistributionChannelType =
  | 'DIRECT_WEBSITE'
  | 'DIRECT_VOICE'
  | 'ONLINE_TRAVEL_AGENCY_OTA'
  | 'GLOBAL_DISTRIBUTION_SYSTEM_GDS'
  | 'CORPORATE_CONTRACT'
  | 'WALK_IN';

export interface NightlyRateCharge {
  readonly chargeDate: Date;
  readonly baseRateAmount: number;
  readonly discountAmount: number;
  readonly netChargeAmount: number;
}

export interface Booking {
  readonly bookingId: string;
  readonly uniqueBookingCode: string; // e.g. "BKG-OTA-EXP-992144"
  readonly associatedReservationIdString: string;
  readonly bookingDistributionChannel: DistributionChannelType;
  readonly ratePlanCodeString: string; // e.g. "RAC-BAR" (Best Available Rate)
  readonly calculatedNightlyRatesList: NightlyRateCharge[];
  readonly totalBasePriceAmount: number;
  readonly totalTaxesFeesAmount: number; // For localization/tax audits
  readonly totalEstimatedGrossPriceAmount: number;
  readonly preAuthorizationDepositRequiredAmount: number;
  readonly preAuthorizationDepositPaidFlag: boolean;
  readonly bookingChannelPartnerId?: string; // e.g. Expedia, Booking.com
  readonly bookedTimestamp: Date;
  readonly lastModifiedAt: Date;
}
