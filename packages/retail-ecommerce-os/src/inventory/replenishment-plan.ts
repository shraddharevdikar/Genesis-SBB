import { LocationId } from './inventory-location.js';

export interface ReplenishmentLineItem {
  readonly skuCodeString: string;
  readonly currentAvailableQuantity: number;
  readonly optimalTargetQuantity: number;
  readonly deficitQuantityToOrder: number;
  readonly sourceSupplierIdString?: string;
}

export interface ReplenishmentPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g., "RPL-2026-CH-04"
  readonly planTitle: string;
  readonly destinationLocationId: LocationId;
  readonly sourceLocationIdString?: string; // Central warehouse ID (if internal transfer)
  readonly lineItemsList: ReplenishmentLineItem[];
  readonly totalPlanEstimatedCostAmount: number;
  readonly currencyCode: string;
  readonly approvedAt?: Date;
  readonly replenishmentStatus: 'DRAFT_PROPOSED' | 'SUBMITTED_FOR_REVIEW' | 'APPROVED_RELEASED' | 'ORDERED_IN_TRANSIT' | 'COMPLETED_CLOSED' | 'CANCELLED';
  readonly lastCalculatedAt: Date;
}
