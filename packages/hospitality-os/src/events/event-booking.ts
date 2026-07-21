import { GuestId } from '../guests/guest.js';

export type EventBookingStatusCode = 'ENQUIRY' | 'CONTRACT_PROPOSAL' | 'SIGNED_CONFIRMED' | 'ACTIVE_LIVE' | 'COMPLETED_CLOSED' | 'CANCELLED';

export interface EventBooking {
  readonly eventBookingId: string;
  readonly uniqueEventBookingCode: string; // e.g. "EVB-2026-FALL-041"
  readonly associatedPropertyIdString: string;
  readonly eventHostNameString: string;
  readonly associatedGuestId?: GuestId; // Set if organized by a staying hotel VIP
  readonly associatedCompanyCorporateIdString?: string; // Links to corporate CRM in SalesOS
  readonly eventType: 'BANQUET_DINNER' | 'PROFESSIONAL_CONFERENCE' | 'WEDDING_RECEPTION' | 'HYBRID_SYMPOSIUM' | 'OTHER';
  readonly scheduledStartTimestamp: Date;
  readonly scheduledEndTimestamp: Date;
  readonly bookedClassroomClassSpaceIdList: string[]; // Scheduled room space identifiers
  readonly currentBookingStatus: EventBookingStatusCode;
  readonly estimatedAttendeesCount: number;
  readonly totalQuotedPriceAmount: number;
  readonly contractDocumentURIString?: string; // Links to LegalOS
  readonly preAuthorizationDepositRequiredAmount: number;
  readonly depositCollectedFlag: boolean;
  readonly eventCoordinatorStaffRoleIdString?: string; // Internal coordinator (HROS)
  readonly lastModifiedAt: Date;
}
