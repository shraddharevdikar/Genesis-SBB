import { InventoryUnitId } from '../projects/inventory.js';
import { PropertyBuyerId } from '../crm/buyer.js';

export interface PropertyBookingId {
  readonly value: string;
}

export interface PropertyBooking {
  readonly bookingId: PropertyBookingId;
  readonly uniqueBookingCode: string; // e.g. "BKG-HEIGHTS-2026-0012"
  readonly associatedUnitId: InventoryUnitId;
  readonly associatedBuyerId: PropertyBuyerId;
  readonly associatedBrokerId?: string;
  readonly associatedChannelPartnerId?: string;
  readonly totalAgreedSaleAmount: number;
  readonly bookingAdvanceAmountPaid: number;
  readonly currencyCode: string;
  readonly bookingDate: Date;
  readonly status: 'RESERVED_PANS' | 'DOCUMENTATION_PENDING' | 'FORMAL_AGREEMENT_SIGNED' | 'CANCELLED_REFUNDED' | 'FULLY_PAID';
  readonly registrationStatus: 'UNREGISTERED' | 'STAMP_DUTY_PAID' | 'COMPLETED_REGISTERED';
  readonly agreementDocumentURI?: string;
  readonly lastModifiedAt: Date;
}
