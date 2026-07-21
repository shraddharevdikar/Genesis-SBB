import { GuestId } from './guest.js';

export type GuestSegment = 'LEISURE' | 'CORPORATE_BUSINESS' | 'GOVERNMENT' | 'VIP_ROYALTY' | 'GROUP_CONVENTION';

export interface GuestProfile {
  readonly profileId: string;
  readonly uniqueProfileCode: string; // e.g. "PRF-GST-00421"
  readonly associatedGuestId: GuestId;
  readonly primarySegment: GuestSegment;
  readonly associatedCompanyCorporateIdString?: string; // Links to SalesOS Corporate Accounts
  readonly cumulativeTotalNightsStayedCount: number;
  readonly cumulativeTotalRevenueAmount: number; // In base currency
  readonly guestSatisfactionIndexScoreDecimal?: number; // Calculated guest experience index
  readonly notesCommentsText?: string;
  readonly privacyRestrictionsJSON?: string; // GDP/CCPA guest privacy requests
  readonly lastStayDate?: Date;
  readonly lastModifiedAt: Date;
}
