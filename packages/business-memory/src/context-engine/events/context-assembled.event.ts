import { Context } from '../core/context.js';

export interface ContextAssembledEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly contextId: string;
  readonly sessionOfRecordId?: string;
  readonly payloadSummary: string;
  readonly timestamp: Date;
}
