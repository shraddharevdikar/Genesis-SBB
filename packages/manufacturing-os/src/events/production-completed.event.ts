import { ProductionOrder } from '../production/production-order.js';
import { ManufacturingContext } from '../core/manufacturing-context.js';

export interface ProductionCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'PRODUCTION_COMPLETED';
  readonly payload: {
    readonly productionOrder: ProductionOrder;
    readonly totalCompletedPassedQuantity: number;
    readonly totalRecordedScrapQuantity: number;
  };
  readonly context: ManufacturingContext;
}
