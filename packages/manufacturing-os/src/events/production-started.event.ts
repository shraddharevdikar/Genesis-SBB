import { ProductionOrder } from '../production/production-order.js';
import { ManufacturingContext } from '../core/manufacturing-context.js';

export interface ProductionStartedEvent {
  readonly eventId: string;
  readonly eventName: 'PRODUCTION_STARTED';
  readonly payload: {
    readonly productionOrder: ProductionOrder;
  };
  readonly context: ManufacturingContext;
}
