import { ServiceDeliveryRecord } from '../service-delivery/service-delivery.js';
import { OperationsContext } from '../core/operations-context.js';

export interface ServiceDeliveredEvent {
  readonly eventId: string;
  readonly eventName: 'SERVICE_DELIVERED';
  readonly payload: {
    readonly record: ServiceDeliveryRecord;
  };
  readonly context: OperationsContext;
}
