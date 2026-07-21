export enum PricingRuleType {
  VOLUME_TIERED_DISCOUNT = 'VOLUME_TIERED_DISCOUNT',
  CUSTOMER_SEGMENT_MODIFIER = 'CUSTOMER_SEGMENT_MODIFIER',
  LOCATION_SURCHARGE_OR_DISCOUNT = 'LOCATION_SURCHARGE_OR_DISCOUNT',
  TIME_OF_DAY_HAPPY_HOUR = 'TIME_OF_DAY_HAPPY_HOUR',
  CLEARANCE_MARKDOWN = 'CLEARANCE_MARKDOWN'
}

export interface PricingRule {
  readonly ruleId: string;
  readonly uniqueRuleCode: string; // e.g., "RULE-BULK-IPHONE-QTY-5"
  readonly ruleName: string;
  readonly ruleType: PricingRuleType;
  readonly scopeSkuCodesList: string[]; // empty implies global rule or governed by tags
  readonly targetCustomerSegmentIdString?: string;
  readonly minimumTriggerQuantity: number;
  readonly adjustmentOperation: 'PERCENTAGE_DECREASE' | 'FIXED_AMOUNT_DECREASE' | 'FIXED_OVERWRITE';
  readonly adjustmentValueDecimal: number; // e.g. 0.15 for 15% off, or 50.0 for $50.00 off
  readonly priorityRankIndex: number; // For compounding price rules ordering
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}
