import { PropertyBookingId } from './booking.js';

export interface PaymentMilestone {
  readonly milestoneId: string;
  readonly sequenceNumber: number;
  readonly descriptionText: string; // e.g. "On Completion of Excavation" or "10th Slab RCC"
  readonly demandDuePercentageDecimal: number; // e.g. 0.10 (10%)
  readonly demandDueAmount: number;
  readonly isTriggeredByConstructionMilestoneFlag: boolean;
  readonly associatedConstructionMilestoneIdString?: string;
  readonly isDemandNoteSentFlag: boolean;
  readonly demandNoteSentAt?: Date;
  readonly paidFlag: boolean;
  readonly paidAmount: number;
  readonly paidAt?: Date;
}

export interface PropertyPaymentPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "PLN-CONSTRUCTION-LINKED"
  readonly associatedBookingId: PropertyBookingId;
  readonly paymentStructureType: 'CONSTRUCTION_LINKED' | 'TIME_LINKED' | 'DOWN_PAYMENT_PLAN';
  readonly totalStructureAmount: number;
  readonly currencyCode: string;
  readonly milestonesList: PaymentMilestone[];
  readonly totalPaidAmount: number;
  readonly outstandingBalanceAmount: number;
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
}
