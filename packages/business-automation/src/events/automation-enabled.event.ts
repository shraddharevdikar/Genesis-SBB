import { AutomationId } from '../identity/automation-id.js';

export interface AutomationEnabledEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly automationId: AutomationId;
  readonly uniqueAutomationCode: string;
  readonly enabledByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}
