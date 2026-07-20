import { RealEstateProjectId } from './real-estate-project.js';
import { TowerId } from './tower.js';
import { InventoryUnitState } from '../core/property-lifecycle.js';

export interface InventoryUnitId {
  readonly value: string;
}

export interface InventoryUnit {
  readonly unitId: InventoryUnitId;
  readonly uniqueUnitCode: string; // e.g. "UNT-A-1204" (Tower A, 12th Floor, Flat 4)
  readonly associatedProjectId: RealEstateProjectId;
  readonly associatedTowerId: TowerId;
  readonly unitNumberText: string;
  readonly floorNumber: number;
  readonly unitType: 'APARTMENT_1BHK' | 'APARTMENT_2BHK' | 'APARTMENT_3BHK' | 'PENTHOUSE' | 'STUDIO' | 'COMMERCIAL_RETAIL' | 'OFFICE_SUITE';
  readonly carpetAreaSquareFeetDecimal: number;
  readonly superBuiltUpAreaSquareFeetDecimal: number;
  readonly currentBasePriceAmount: number;
  readonly currencyCode: string;
  readonly currentState: InventoryUnitState;
  readonly facingDirectionText?: string; // e.g. "East-Facing", "Lake-View"
  readonly floorRiseChargeAmount: number;
  readonly premiumViewChargeAmount: number;
  readonly activeFlag: boolean;
  readonly lastModifiedAt: Date;
}
