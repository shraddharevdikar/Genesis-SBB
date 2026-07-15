import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface MemoryRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredReferenceId: MemoryReferenceId;
  readonly retirementReasonCode: string; // e.g. "RETENTION_POLICY_EXPIRED"
  readonly performedByRoleId: string;
  readonly timestamp: Date;
}
