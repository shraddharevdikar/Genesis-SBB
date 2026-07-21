export interface PickupOrder {
  readonly pickupId: string;
  readonly uniquePickupCode: string; // e.g., "PKP-2026-CH-012"
  readonly associatedSalesOrderIdString: string;
  readonly targetStoreLocationIdString: string; // e.g. "LOC-ZURICH-POS"
  readonly secureRedemptionQrCodeString: string; // QR code representation for pickup desk
  readonly allocatedLockerIdString?: string; // e.g. "LOCKER-B-04"
  readonly pickupDeadlineTimestamp: Date;
  readonly customerCheckedInFlag: boolean;
  readonly customerEtaTimestamp?: Date; // customer ETA updated via mobile app
  readonly pickupStatus: 'AWAITING_STAGE' | 'STAGED_READY_FOR_PICKUP' | 'COLLECTED_CLOSED' | 'EXPIRED_RETURNING_TO_STOCK';
  readonly handedOverByStaffRoleIdString?: string;
  readonly collectedAt?: Date;
}
