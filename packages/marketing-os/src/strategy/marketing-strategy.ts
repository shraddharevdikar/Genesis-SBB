import { MarketingContext } from '../core/marketing-context.js';

export interface MarketingStrategyId {
  readonly value: string;
}

export type MarketingStrategyTier =
  | 'ENTERPRISE_GLOBAL'
  | 'REGIONAL'
  | 'PRODUCT_LINE'
  | 'TACTICAL';

export interface MarketingStrategy {
  readonly strategyId: MarketingStrategyId;
  readonly uniqueStrategyCode: string; // e.g. "STR-GLOBAL-2026"
  readonly displayName: string;
  readonly descriptionText: string;
  readonly strategyTier: MarketingStrategyTier;
  readonly fiscalYear: number;
  readonly allocatedOverallBudgetAmount: number;
  readonly currencyCode: string; // e.g. "CHF", "USD"
  readonly targetCpaAmountLimit: number; // Target Cost-Per-Acquisition
  readonly targetRoasRatioLimit: number; // Target Return-On-Ad-Spend
  readonly isApprovedFlag: boolean;
  readonly authorOperatorRoleId: string;
}
