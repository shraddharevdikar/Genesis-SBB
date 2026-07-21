import { CustomerId } from '../customers/retail-customer.js';
import { OrderItem } from './order-item.js';
import { OrderStatus } from '../core/commerce-lifecycle.js';

export interface SalesOrder {
  readonly orderId: string;
  readonly uniqueOrderCode: string; // e.g., "ORD-2026-CH-0042"
  readonly associatedCustomerId: CustomerId;
  readonly currencyCode: string; // e.g. "USD", "CHF"
  readonly orderLinesList: OrderItem[];
  
  // Financial Summary
  readonly grossItemsSubtotalAmount: number;
  readonly orderLevelDiscountAmount: number; // discounts applied to the whole order
  readonly shippingFeeChargedAmount: number;
  readonly calculatedTaxTotalAmount: number;
  readonly orderGrandTotalAmount: number; // grossItemsSubtotalAmount - orderLevelDiscountAmount + shippingFeeChargedAmount + calculatedTaxTotalAmount
  
  // Delivery & Billing
  readonly shippingAddressString?: string;
  readonly billingAddressString?: string;
  readonly deliveryMethod: 'HOME_DELIVERY' | 'IN_STORE_PICKUP' | 'CURBSIDE_PICKUP' | 'DIGITAL_DOWNLOAD';
  readonly targetStoreOrWarehouseLocationIdString?: string; // Point of Sale store or FC
  
  // State
  readonly orderStatus: OrderStatus;
  readonly paymentStatus: 'UNPAID_PENDING' | 'AUTHORIZED' | 'PAID' | 'FAILED_DECLINED' | 'PARTIALLY_REFUNDED' | 'FULLY_REFUNDED_CLOSED';
  
  // Timestamps
  readonly orderedAt: Date;
  readonly lastModifiedAt: Date;
}
