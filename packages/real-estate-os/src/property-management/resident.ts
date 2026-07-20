import { InventoryUnitId } from '../projects/inventory.js';

export interface Resident {
  readonly residentId: string;
  readonly uniqueResidentCode: string; // e.g. "RSD-A-1204-1"
  readonly fullNameString: string;
  readonly associatedUnitId: InventoryUnitId;
  readonly occupancyType: 'OWNER_OCCUPIED' | 'TENANT_OCCUPIED' | 'VACANT';
  readonly contactEmailAddress: string;
  readonly contactPhoneNumber: string;
  readonly moveInDate: Date;
  readonly moveOutDate?: Date;
  readonly verifiedResidentFlag: boolean;
  readonly activeFlag: boolean;
  readonly registeredAt: Date;
}
