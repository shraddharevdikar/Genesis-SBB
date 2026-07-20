import { InventoryUnitId } from '../projects/inventory.js';

export interface WarrantyCoverage {
  readonly componentName: 'STRUCTURAL_SHELL' | 'WATERPROOFING' | 'PLUMBING_LINES' | 'ELECTRICAL_CABLING' | 'ELEVATOR_MECHANISM' | 'FIXTURES_FITTINGS';
  readonly warrantyDurationMonthsCount: number;
  readonly coverageScopeText: string;
}

export interface UnitWarranty {
  readonly warrantyId: string;
  readonly uniqueWarrantyCode: string; // e.g. "WRNT-HEIGHTS-1204"
  readonly associatedUnitId: InventoryUnitId;
  readonly warrantyStartAt: Date;
  readonly warrantyEndAt: Date;
  readonly coveragesList: WarrantyCoverage[];
  readonly registeredManufacturerContactText?: string;
  readonly certificateStorageURI?: string;
  readonly activeFlag: boolean;
}
