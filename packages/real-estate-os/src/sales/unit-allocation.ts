import { PropertyBookingId } from './booking.js';
import { InventoryUnitId } from '../projects/inventory.js';
import { PropertyBuyerId } from '../crm/buyer.js';

export interface UnitAllocation {
  readonly allocationId: string;
  readonly uniqueAllocationCode: string; // e.g. "ALC-A-1204"
  readonly associatedBookingId: PropertyBookingId;
  readonly associatedUnitId: InventoryUnitId;
  readonly allocatedBuyerId: PropertyBuyerId;
  readonly parkingSpaceAssignedText?: string; // e.g. "Parking Bay B-42"
  readonly storageUnitAssignedText?: string;
  readonly isPhysicalHandoverReadyFlag: boolean;
  readonly allocatedAt: Date;
  readonly updatedAt: Date;
}
