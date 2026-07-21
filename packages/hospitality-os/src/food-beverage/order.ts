export interface OrderLineItem {
  readonly menuItemIdString: string;
  readonly itemName: string;
  readonly orderedQuantityCount: number;
  readonly unitPriceAtSaleAmount: number;
  readonly subtotalAmount: number;
  readonly customPreparationNotesText?: string;
}

export interface Order {
  readonly orderId: string;
  readonly uniqueOrderCode: string; // e.g. "ORD-F&B-2026-00424"
  readonly associatedRestaurantIdString: string;
  readonly associatedDiningReservationIdString?: string;
  readonly associatedRoomReservationIdString?: string; // Set if Room Service order (billed to room)
  readonly diningTableNumberString?: string;
  readonly orderedItemsList: OrderLineItem[];
  readonly totalBasePriceAmount: number;
  readonly totalTaxPriceAmount: number;
  readonly totalGratuityTipAmount: number;
  readonly totalGrossOrderPriceAmount: number;
  readonly orderStatus: 'RECEIVED' | 'PREPARING' | 'SERVED' | 'COMPLETED_BILLED' | 'CANCELLED';
  readonly orderedAt: Date;
  readonly lastModifiedAt: Date;
}
