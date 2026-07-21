export interface OrderItem {
  readonly lineItemId: string;
  readonly skuCodeString: string;
  readonly productDisplayNameString: string;
  readonly orderedQuantity: number;
  readonly baseUnitPriceAmount: number;
  readonly appliedDiscountAmount: number; // Sum of promotions/discounts applied to this line
  readonly lineSubtotalBeforeTaxAmount: number; // (baseUnitPriceAmount * orderedQuantity) - appliedDiscountAmount
  readonly taxRatePercentDecimal: number; // e.g. 0.08 for 8% sales tax
  readonly taxCalculatedAmount: number;
  readonly lineNetTotalAmount: number; // lineSubtotalBeforeTaxAmount + taxCalculatedAmount
  readonly itemFulfillmentStatus: 'UNFULFILLED' | 'ALLOCATED' | 'PICKED' | 'PACKED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
}
