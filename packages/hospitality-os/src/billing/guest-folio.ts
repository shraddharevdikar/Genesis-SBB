export type FolioChargeCategory =
  | 'ACCOMMODATION_NIGHTLY'
  | 'FOOD_BEVERAGE_DINING'
  | 'SPA_FACILITIES'
  | 'MINIBAR_AMENITY'
  | 'LAUNDRY_TELEPHONE'
  | 'DAMAGES_PENALTY'
  | 'ADJUSTMENT_DISCOUNT';

export interface FolioLineItem {
  readonly itemId: string;
  readonly chargeTimestamp: Date;
  readonly category: FolioChargeCategory;
  readonly displayDescription: string;
  readonly amountChargedDecimal: number;
  readonly taxesAmountDecimal: number;
  readonly quantityCount: number;
  readonly netTotalAmountDecimal: number;
  readonly postedByStaffRoleIdString: string; // Audit trail
  readonly referenceSourceCode?: string; // e.g. "ORD-F&B-00424" or "FAC-BKG-9921"
}

export interface GuestFolio {
  readonly folioId: string;
  readonly uniqueFolioCode: string; // e.g. "FOL-ZUR-2026-0814A"
  readonly associatedReservationIdString: string;
  readonly associatedGuestIdString: string;
  readonly chargedLineItemsList: FolioLineItem[];
  readonly totalDebitsAmount: number;
  readonly totalCreditsPaymentsAmount: number;
  readonly outstandingBalanceAmount: number; // debits - credits
  readonly isLockedAndFinalizedFlag: boolean; // Cannot modify after checkout & invoice generation
  readonly lastCalculatedAt: Date;
}
