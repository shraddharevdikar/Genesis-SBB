import { RetailContext } from './retail-context.js';
import { ProductCatalog } from '../catalog/product-catalog.js';
import { PriceList } from '../pricing/price-list.js';
import { SalesOrder } from '../orders/sales-order.js';
import { StockAllocation } from '../inventory/stock-allocation.js';
import { OrderFulfillment } from '../orders/order-fulfillment.js';
import { ReturnOrder } from '../orders/return-order.js';
import { LoyaltyAccount } from '../customers/loyalty-account.js';
import { CustomerId } from '../customers/retail-customer.js';

export interface RetailFramework {
  manageCatalog(
    uniqueCatalogCode: string,
    catalogTitle: string,
    marketRegionCodeText: string,
    associatedProductsPayloadJSON: string,
    context?: RetailContext
  ): Promise<ProductCatalog>;

  configurePricing(
    uniquePriceListCode: string,
    priceListTitle: string,
    currencyCode: string,
    targetChannelSourcesList: string[],
    skuPricesPayloadJSON: string,
    context?: RetailContext
  ): Promise<PriceList>;

  processOrder(
    uniqueOrderCode: string,
    associatedCustomerId: CustomerId,
    currencyCode: string,
    orderItemsPayloadJSON: string,
    deliveryMethod: 'HOME_DELIVERY' | 'IN_STORE_PICKUP' | 'CURBSIDE_PICKUP' | 'DIGITAL_DOWNLOAD',
    targetLocationIdString?: string,
    context?: RetailContext
  ): Promise<SalesOrder>;

  allocateInventory(
    uniqueAllocationCode: string,
    associatedOrderIdString: string,
    itemsToAllocatePayloadJSON: string,
    context?: RetailContext
  ): Promise<StockAllocation[]>;

  fulfillOrder(
    uniqueFulfillmentCode: string,
    associatedOrderIdString: string,
    sourceInventoryLocationIdString: string,
    allocatedItemsPayloadJSON: string,
    shippingCarrierName?: string,
    context?: RetailContext
  ): Promise<OrderFulfillment>;

  processReturn(
    uniqueReturnCode: string,
    associatedSalesOrderIdString: string,
    returnedItemsPayloadJSON: string,
    refundProcessingMethod: 'ORIGINAL_PAYMENT_METHOD' | 'GIFT_CARD_CREDIT' | 'EXCHANGE_ITEM_OFFSET',
    context?: RetailContext
  ): Promise<ReturnOrder>;

  manageLoyalty(
    associatedCustomerId: CustomerId,
    pointsToEarnOrRedeemCount: number,
    transactionNotesText: string,
    associatedSalesOrderIdString?: string,
    context?: RetailContext
  ): Promise<LoyaltyAccount>;
}
