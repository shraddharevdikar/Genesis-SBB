import { AutomationId } from '../identity/automation-id.js';

export interface AutomationRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredAutomationId: AutomationId;
  readonly uniqueAutomationCode: string;
  readonly retiredByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
