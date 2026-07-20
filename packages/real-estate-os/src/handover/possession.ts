import { PropertyBookingId } from '../sales/booking.js';
import { InventoryUnitId } from '../projects/inventory.js';
import { PropertyBuyerId } from '../crm/buyer.js';
import { PossessionHandoverState } from '../core/property-lifecycle.js';

export interface PropertyPossession {
  readonly possessionId: string;
  readonly uniquePossessionCode: string; // e.g. "POS-A-1204"
  readonly associatedBookingId: PropertyBookingId;
  readonly associatedUnitId: InventoryUnitId;
  readonly targetBuyerId: PropertyBuyerId;
  readonly currentHandoverState: PossessionHandoverState;
  readonly targetPossessionDate: Date;
  readonly actualHandoverDate?: Date;
  readonly finalDuesClearedFlag: boolean;
  readonly keysHandedOverFlag: boolean;
  readonly legalRegistrationDeedStorageURI?: string;
  readonly physicalHandoverSignOffDocURI?: string;
  readonly lastModifiedAt: Date;
}
