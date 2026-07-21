import { Route } from './route.js';

export type ShipmentCarrierCode = 'OWN_FLEET' | 'FEDEX' | 'UPS' | 'DHL' | 'SCHENKER_LTL' | 'MAERSK_LINE';

export interface ShipmentUnitLine {
  readonly transportOrderIdString: string; // Links to TransportOrder
  readonly uniqueHandlingUnitBarcode: string; // Pallet / box tracking tag
  readonly weightKgDecimal: number;
}

export interface Shipment {
  readonly shipmentId: string;
  readonly uniqueShipmentCode: string; // e.g. "SHP-2026-FALL-00424"
  readonly carrierType: ShipmentCarrierCode;
  readonly carrierWaybillBillOfLadingString?: string; // Regulatory trade compliance
  readonly associatedRoute: Route;
  readonly assignedVehicleIdString?: string; // Links to Vehicle (if own fleet)
  readonly shipmentUnitLinesList: ShipmentUnitLine[];
  readonly grossTotalWeightKgDecimal: number;
  readonly currentTemperatureReadingCelsius?: number; // Cold-chain compliance telemetry
  readonly commercialInvoicingValueAmount: number; // Links to FinanceOS
  readonly dispatchedTimestamp?: Date;
  readonly estimatedArrivalTimestamp: Date;
  readonly actualArrivalTimestamp?: Date;
  readonly currentShipmentStatus: 'MANIFEST_DRAFT' | 'READY_FOR_DISPATCH' | 'DEPARTED' | 'IN_LINEHAUL_TRANSIT' | 'ARRIVED_AT_DESTINATION' | 'CUSTOMS_HOLD';
  readonly lastModifiedAt: Date;
}
