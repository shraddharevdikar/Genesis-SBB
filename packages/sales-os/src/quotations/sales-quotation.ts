import { OpportunityId } from '../opportunities/sales-opportunity.js';
import { QuotationLifecycleState } from '../core/sales-lifecycle.js';
import { PricingModel } from './pricing-model.js';
import { DiscountPolicy } from './discount-policy.js';

export interface QuotationLineItem {
  readonly lineItemId: string;
  readonly productCatalogCode: string; // e.g. "PRD-CLOUD-TRANSFORM-DEV"
  readonly quantityNumeric: number;
  readonly listUnitPriceAmount: number;
  readonly grossSubtotalAmount: number; // qty * list price
  readonly discountAmount: number;
  readonly netLinePriceAmount: number; // gross - discount
}

export interface QuotationId {
  readonly value: string;
}

export interface SalesQuotation {
  readonly quotationId: QuotationId;
  readonly uniqueQuotationCode: string; // e.g., "QUO-SBB-0021"
  readonly parentOpportunityId: OpportunityId;
  readonly lineItemsList: QuotationLineItem[];
  readonly totalListAmount: number;
  readonly totalDiscountAmount: number;
  readonly finalNetContractAmount: number;
  readonly currencyCode: string; // e.g., "CHF"
  readonly pricingModelUsed: PricingModel;
  readonly appliedDiscountPolicy: DiscountPolicy;
  readonly isApprovedForClientReleaseFlag: boolean;
  readonly expirationDate: Date;
  readonly currentState: QuotationLifecycleState;
  readonly authorOperatorRoleId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
