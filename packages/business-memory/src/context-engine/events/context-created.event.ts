import { Context } from '../core/context.js';

export interface ContextCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly context: Context;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}
