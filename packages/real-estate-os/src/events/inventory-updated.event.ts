import { InventoryUnit } from '../projects/inventory.js';
import { IndustryContext } from '../core/industry-context.js';

export interface InventoryUpdatedEvent {
  readonly eventId: string;
  readonly eventName: 'INVENTORY_UPDATED';
  readonly payload: {
    readonly unit: InventoryUnit;
  };
  readonly context: IndustryContext;
}
