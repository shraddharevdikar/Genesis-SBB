import { LogisticsContext } from './logistics-context.js';
import { PurchaseOrder } from '../procurement/purchase-order.js';
import { Warehouse } from '../warehousing/warehouse.js';
import { StockMovement } from '../warehousing/stock-movement.js';
import { InventoryBalance } from '../inventory/inventory-balance.js';
import { Shipment } from '../transportation/shipment.js';
import { Delivery } from '../delivery/delivery.js';
import { ReturnOrder } from '../returns/return-order.js';

export interface LogisticsFramework {
  /**
   * Plans, coordinates, and creates Purchase Orders across external suppliers.
   */
  manageProcurement(
    supplierIdString: string,
    targetWarehouseIdString: string,
    skuQuantitiesMapJSON: string,
    context?: LogisticsContext
  ): Promise<PurchaseOrder>;

  /**
   * Logs physical inventory dock receipt, validates line items, and starts stowing/put-away.
   */
  receiveInventory(
    associatedPurchaseOrderIdString: string,
    receivedQuantitiesJSON: string,
    carrierWaybillReferenceString: string,
    context?: LogisticsContext
  ): Promise<StockMovement[]>;

  /**
   * Provisions, designs, or modifies warehouse zones, aisles, and storage bins.
   */
  manageWarehouse(
    uniqueWarehouseCodeString: string,
    totalStorageCapacityCubicMeters: number,
    hazardousMaterialsAuthorized: boolean,
    context?: LogisticsContext
  ): Promise<Warehouse>;

  /**
   * Dynamically allocates and commits physical stock balances to active customer orders.
   */
  allocateInventory(
    associatedOrderIdString: string,
    requestedSkuCodeString: string,
    allocationQuantityCount: number,
    context?: LogisticsContext
  ): Promise<InventoryBalance>;

  /**
   * Combines transport orders, schedules linehaul routes, and dispatches fleet shipments.
   */
  dispatchShipment(
    transportOrdersListJSON: string,
    targetCarrierTypeCode: string,
    scheduledRouteIdString: string,
    context?: LogisticsContext
  ): Promise<Shipment>;

  /**
   * Dispatches and checks last-mile delivery runs, monitoring GPS coordinate updates and ETA updates.
   */
  trackDelivery(
    associatedDeliveryIdString: string,
    currentLatitudeDecimal: number,
    currentLongitudeDecimal: number,
    context?: LogisticsContext
  ): Promise<Delivery>;

  /**
   * Approves RMAs, tracks reverse transport routes, and catalogs physical return inspection outcomes.
   */
  processReturns(
    originalSalesOrderIdString: string,
    returnReasonCodeString: string,
    returnQuantitiesJSON: string,
    context?: LogisticsContext
  ): Promise<ReturnOrder>;
}
